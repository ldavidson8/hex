<script lang="ts">
	import type monaco from 'monaco-editor-core';
	import { shikiToMonaco } from '@shikijs/monaco';
	import { onMount, onDestroy } from 'svelte';
	import { createHighlighter } from 'shiki';

	let container: HTMLDivElement;

	let editor: monaco.editor.IStandaloneCodeEditor | undefined;
	let core: typeof monaco;

	async function loadLanguage(language: string) {
		if (!core || !core.languages) return;
		editor?.getModel()?.dispose();
		core.languages.register({ id: language });
		const highlighter = await createHighlighter({ themes: ['vitesse-dark'], langs: [language] });
		shikiToMonaco(highlighter, core);
	}

	onMount(async () => {
		[core] = await Promise.all([import('monaco-editor-core')]);
		await loadLanguage(lang);

		editor = core.editor.create(container, {
			value: source,
			language: lang,
			fontFamily: 'IBM Plex Mono',
			theme: 'vitesse-dark',
			automaticLayout: true,
			wordWrap: wrap ? 'on' : 'off',
			lineNumbers: showLineNumbers ? 'on' : 'off',
			minimap: { enabled: false },
			scrollBeyondLastLine: false,
			padding: { top: 10, bottom: 10 }
		});

		editor.onDidChangeModelContent(() => {
			source = editor?.getValue() || '';
		});

		if (document.fonts) {
			document.fonts.ready.then(() => {
				core.editor.remeasureFonts();
				console.log('Fonts loaded and remeasured');
			});
		}
	});

	onDestroy(() => {
		editor?.dispose();
	});

	interface Props {
		source: string;
		showLineNumbers: boolean;
		wrap: boolean;
		lang: string;
	}

	let { source = '', showLineNumbers = true, wrap = false, lang = 'javascript' }: Props = $props();

	$effect(() => {
		if (editor) {
			const model = editor.getModel();
			if (model && model.getLanguageId() !== lang) {
				core.editor.setModelLanguage(model, lang);
				loadLanguage(lang);
			}
		}
	});

	$effect(() => {
		if (editor && editor.getValue() !== source) {
			editor.setValue(source);
		}
	});

	$effect(() => {
		if (editor) {
			editor.updateOptions({
				wordWrap: wrap ? 'on' : 'off'
			});
		}
	});

	$effect(() => {
		if (editor) {
			editor.updateOptions({
				lineNumbers: showLineNumbers ? 'on' : 'off'
			});
		}
	});
</script>

<div
	bind:this={container}
	class="h-full w-full overflow-hidden transition-opacity duration-300"
></div>
