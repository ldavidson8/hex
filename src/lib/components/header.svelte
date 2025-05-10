<script lang="ts">
	import Logo from './logo.svelte';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiMoonFill from '~icons/ri/moon-fill';
</script>

<div class="sticky top-0 z-30 flex flex-col backdrop-blur-md">
	<nav class="flex items-center justify-between border-b border-neutral-700 text-sm">
		<div class="flex items-center">
			<a
				href="/"
				class="flex items-center gap-2 border-r border-neutral-700 px-2.5 py-4 text-lg font-semibold tracking-wider text-neutral-100 uppercase md:px-5"
			>
				HEX
				<Logo class="size-5" />
			</a>
			<ul class="flex items-center">
				<li class="border-r border-neutral-700">
					<a href="/my-themes" class="block px-5 py-4 text-neutral-400 hover:text-neutral-200">
						my themes
					</a>
				</li>
				<li class="border-r border-neutral-700">
					<a href="/explore" class="block px-5 py-4 text-neutral-400 hover:text-neutral-200">
						explore
					</a>
				</li>
			</ul>
		</div>
		<div class="flex items-center">
			<a
				href="https://github.com/ldavidson8/hex"
				target="_blank"
				rel="noopener noreferrer"
				class="block border-l border-neutral-700 px-3 py-3 text-neutral-400 hover:text-neutral-200"
				aria-label="GitHub Repository"
			>
				<RiGithubFill height={24} width={24} />
			</a>
			<button
				class="block border-l border-neutral-700 px-3 py-3 text-neutral-400 hover:text-neutral-200"
				aria-label="Toggle theme"
			>
				<RiMoonFill height={20} width={20} />
			</button>
		</div>
	</nav>
</div>
