<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import { Editor } from '@tiptap/core';
  import { Placeholder } from '@tiptap/extensions';
  import StarterKit from '@tiptap/starter-kit';
  import Highlight from '@tiptap/extension-highlight';
  import uniqueId from 'lodash/uniqueId';
  import isURL from 'validator/es/lib/isURL';

  let {
    class: classList = '',
    hideLabel = false,
    hint = '',
    id,
    label,
    placeholder = '',
    required = false,
    value = $bindable(''),
    ...restProps
  }: {
    class?: string;
    hideLabel?: boolean;
    hint?: string;
    id?: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    [key: string]: unknown;
  } = $props();
  let uid = $derived(id || uniqueId('u'));

  let element = $state<HTMLDivElement>();
  let editor = $state<Editor>();

  let link = $state({
    href: '',
    new: false,
  });

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit.configure({
          link: {
            openOnClick: false,
            defaultProtocol: 'https',
          },
        }),
        Highlight.configure({}),
        Placeholder.configure({
          placeholder,
        }),
      ],
      content: value,
      onTransaction: ({ editor: newEditor }) => {
        // force re-render so `editor.isActive` works as expected
        editor = undefined;
        editor = newEditor;
        value = editor.getHTML();
      },
    });
  });

  $effect(() => {
    // This makes sure if the parent passes in something new it sets Tiptap to use that instead of what it was.
    if (value !== editor?.getHTML()) {
      editor?.commands.setContent(value);
    }

    if (editor?.isActive('link')) {
      link.href = editor.getAttributes('link').href;
      link.new = false;
    } else {
      link.href = '';
      link.new = false;
    }
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  function changeThing(e: Event) {
    const target = e.target as HTMLSelectElement;
    let val: string | number = target.value;

    if (val === 'paragraph') {
      editor?.chain().focus().setParagraph().run();
    } else {
      val = +val < 1 || +val > 6 ? 1 : +val;
      editor
        ?.chain()
        .focus()
        .toggleHeading({ level: val as 1 | 2 | 3 | 4 | 5 | 6 })
        .run();
    }
  }

  const getBlockType = () => {
    if (editor?.isActive('heading', { level: 1 })) return '1';
    if (editor?.isActive('heading', { level: 2 })) return '2';
    if (editor?.isActive('heading', { level: 3 })) return '3';
    if (editor?.isActive('heading', { level: 4 })) return '4';
    if (editor?.isActive('heading', { level: 5 })) return '5';
    if (editor?.isActive('heading', { level: 6 })) return '6';
    if (editor?.isActive('paragraph')) return 'paragraph';
    return '';
  };
</script>

<div class={classList}>
  <label
    for={uid}
    class="form-label"
    class:visually-hidden={hideLabel}
    >{#if required}<span class="text-primary">*</span>{/if}{label}</label
  >
  <input
    id={uid}
    bind:value
    class="visually-hidden"
    tabindex="-1"
  />
  <div class="form-control p-0">
    <div class="tiptap-toolbar">
      {#if editor}
        <div class="hstack gap-1">
          <select
            name="a"
            id="kl"
            onchange={changeThing}
            value={getBlockType()}
            class="form-select"
            style="max-width: 175px;"
          >
            <option value="paragraph">Paragraph</option>
            <option value="1">Header 1</option>
            <option value="2">Header 2</option>
            <option value="3">Header 3</option>
            <option value="4">Header 4</option>
            <option value="5">Header 5</option>
            <option value="6">Header 6</option>
          </select>
          <GIconBtn
            icon="formatBold"
            title="Bold"
            variant="base-i4"
            onclick={() => editor?.chain().focus().toggleBold().run()}
            class={editor.isActive('bold') ? 'active' : ''}
          />
          <GIconBtn
            icon="formatItalic"
            title="Italic"
            variant="base-i4"
            onclick={() => editor?.chain().focus().toggleItalic().run()}
            class={editor.isActive('italic') ? 'active' : ''}
          />
          <GIconBtn
            icon="formatUnderline"
            title="Underline"
            variant="base-i4"
            onclick={() => editor?.chain().focus().toggleUnderline().run()}
            class={editor.isActive('underline') ? 'active' : undefined}
          />
          <GIconBtn
            icon="formatStrikethrough"
            title="Strike"
            variant="base-i4"
            onclick={() => editor?.chain().focus().toggleStrike().run()}
            class={editor.isActive('strike') ? 'active' : undefined}
          />
          <div class="border-start border-base-4 align-self-stretch mx-1"></div>
          <GIconBtn
            icon="formatListBulleted"
            title="Bulleted List"
            variant="base-i4"
            onclick={() => editor?.chain().focus().toggleBulletList().run()}
            class={editor.isActive('bulletList') ? 'active' : undefined}
          />
          <GIconBtn
            icon="formatListNumbered"
            title="Ordered List"
            variant="base-i4"
            onclick={() => editor?.chain().focus().toggleOrderedList().run()}
            class={editor.isActive('orderedList') ? 'active' : undefined}
          />
          <div class="border-start border-base-4 align-self-stretch mx-1"></div>
          <GIconBtn
            icon="formatBlockquote"
            title="Blockquote"
            variant="base-i4"
            onclick={() => editor?.chain().focus().toggleBlockquote().run()}
            class={editor.isActive('blockquote') ? 'active' : undefined}
          />
          <GIconBtn
            icon="link"
            title="Link"
            variant="base-i4"
            class={editor.isActive('link') ? 'active' : undefined}
            onclick={async (e: MouseEvent) => {
              link.new = true;
              let target = e.currentTarget as HTMLButtonElement;
              let toolbar = target.closest('.tiptap-toolbar');
              await tick();
              let linkInput = toolbar?.querySelector(
                `#${uid}-tiptap-link-input`,
              ) as HTMLInputElement;
              linkInput?.focus();
            }}
          />
          <GIconBtn
            icon="formatHighlight"
            title="Highlight"
            variant="base-i4"
            onclick={() => editor?.chain().focus().toggleHighlight().run()}
            class={editor.isActive('highlight') ? 'active' : undefined}
          />
          <div class="border-start border-base-4 align-self-stretch mx-1"></div>
          <GIconBtn
            icon="undo"
            title="Undo"
            variant="base-i4"
            onclick={() => editor?.commands.undo()}
          />
          <GIconBtn
            icon="redo"
            title="Redo"
            variant="base-i4"
            onclick={() => editor?.commands.redo()}
          />
        </div>
        <div class="tiptap-sub-toolbar">
          {#if editor.isActive('link') || link.new}
            <div class="hstack gap-1">
              <GTextInput
                label="Link"
                hideLabel
                placeholder="https://"
                bind:value={link.href}
                style="width: 400px;"
                id={`${uid}-tiptap-link-input`}
              />
              <GBtn
                disabled={!(
                  link.href.startsWith('/') ||
                  isURL(link.href, {
                    protocols: ['http', 'https'],
                    require_protocol: true,
                  })
                )}
                onclick={() =>
                  editor
                    ?.chain()
                    .focus()
                    .extendMarkRange('link')
                    .setLink({
                      href: link.href,
                      target: link.href.startsWith('/') ? null : '_blank',
                    })
                    .run()}
              >
                Set Link
              </GBtn>
              {#if editor.isActive('link')}
                <GIconBtn
                  icon="linkOff"
                  title="Remove Link"
                  variant="base-i4"
                  onclick={() => editor?.commands.unsetLink()}
                />
              {/if}
            </div>
          {/if}
        </div>
      {/if}
    </div>

    <div bind:this={element}></div>
  </div>
</div>
