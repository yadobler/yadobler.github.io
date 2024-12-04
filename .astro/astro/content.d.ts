declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2024-02-26-Cantonese_Song_Remix.md": {
	id: "2024-02-26-Cantonese_Song_Remix.md";
  slug: "2024-02-26-cantonese_song_remix";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-10-Cantonese_Reflection.md": {
	id: "2024-04-10-Cantonese_Reflection.md";
  slug: "2024-04-10-cantonese_reflection";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024.md": {
	id: "huntress_ctf_2024.md";
  slug: "huntress_ctf_2024";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/baby_buffer_overflow.md": {
	id: "huntress_ctf_2024/baby_buffer_overflow.md";
  slug: "huntress_ctf_2024/baby_buffer_overflow";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/base64by32.md": {
	id: "huntress_ctf_2024/base64by32.md";
  slug: "huntress_ctf_2024/base64by32";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/cattle.md": {
	id: "huntress_ctf_2024/cattle.md";
  slug: "huntress_ctf_2024/cattle";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/discount_programming_devices.md": {
	id: "huntress_ctf_2024/discount_programming_devices.md";
  slug: "huntress_ctf_2024/discount_programming_devices";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/eepy.md": {
	id: "huntress_ctf_2024/eepy.md";
  slug: "huntress_ctf_2024/eepy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/finders_fee.md": {
	id: "huntress_ctf_2024/finders_fee.md";
  slug: "huntress_ctf_2024/finders_fee";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/gocrackme1.md": {
	id: "huntress_ctf_2024/gocrackme1.md";
  slug: "huntress_ctf_2024/gocrackme1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/i_cant_ssh.md": {
	id: "huntress_ctf_2024/i_cant_ssh.md";
  slug: "huntress_ctf_2024/i_cant_ssh";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/malibu.md": {
	id: "huntress_ctf_2024/malibu.md";
  slug: "huntress_ctf_2024/malibu";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/matryoshkaqr.md": {
	id: "huntress_ctf_2024/matryoshkaqr.md";
  slug: "huntress_ctf_2024/matryoshkaqr";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/mimi.md": {
	id: "huntress_ctf_2024/mimi.md";
  slug: "huntress_ctf_2024/mimi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/mystery.md": {
	id: "huntress_ctf_2024/mystery.md";
  slug: "huntress_ctf_2024/mystery";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/nightmare_on_hunt_street_(bundle).md": {
	id: "huntress_ctf_2024/nightmare_on_hunt_street_(bundle).md";
  slug: "huntress_ctf_2024/nightmare_on_hunt_street_bundle";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/no_need_for_brutus.md": {
	id: "huntress_ctf_2024/no_need_for_brutus.md";
  slug: "huntress_ctf_2024/no_need_for_brutus";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/ran_somewhere.md": {
	id: "huntress_ctf_2024/ran_somewhere.md";
  slug: "huntress_ctf_2024/ran_somewhere";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/red_phish_blue_phish.md": {
	id: "huntress_ctf_2024/red_phish_blue_phish.md";
  slug: "huntress_ctf_2024/red_phish_blue_phish";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/russian_roulette.md": {
	id: "huntress_ctf_2024/russian_roulette.md";
  slug: "huntress_ctf_2024/russian_roulette";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/strange_calc.md": {
	id: "huntress_ctf_2024/strange_calc.md";
  slug: "huntress_ctf_2024/strange_calc";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/the_void.md": {
	id: "huntress_ctf_2024/the_void.md";
  slug: "huntress_ctf_2024/the_void";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/too_many_bits.md": {
	id: "huntress_ctf_2024/too_many_bits.md";
  slug: "huntress_ctf_2024/too_many_bits";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/txt_message.md": {
	id: "huntress_ctf_2024/txt_message.md";
  slug: "huntress_ctf_2024/txt_message";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/typo.md": {
	id: "huntress_ctf_2024/typo.md";
  slug: "huntress_ctf_2024/typo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/unbelievable.md": {
	id: "huntress_ctf_2024/unbelievable.md";
  slug: "huntress_ctf_2024/unbelievable";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/whamazon.md": {
	id: "huntress_ctf_2024/whamazon.md";
  slug: "huntress_ctf_2024/whamazon";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"huntress_ctf_2024/zimmer_down.md": {
	id: "huntress_ctf_2024/zimmer_down.md";
  slug: "huntress_ctf_2024/zimmer_down";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
