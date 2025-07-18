<script lang="ts">
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import { onDestroy, onMount } from 'svelte';

  let element = $state<HTMLDivElement>();
  let editor = $state<Editor>();

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [StarterKit],
      content: '<h2>Hello World! 🌍️ </h2>',
      onTransaction: ({ editor: newEditor }) => {
        // https://github.com/ueberdosis/tiptap/issues/6025#issuecomment-2657619316
        editor = undefined;
        editor = newEditor;
      },
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
</script>

{#if editor}
  <button
    onclick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
    class:active={editor.isActive('heading', { level: 1 })}
  >
    H1
  </button>
  <button
    onclick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
    class:active={editor.isActive('heading', { level: 2 })}
  >
    H2
  </button>
  <button
    onclick={() => editor?.chain().focus().setParagraph().run()}
    class:active={editor.isActive('paragraph')}
  >
    P
  </button>
{/if}

<div bind:this={element}></div>

<style>
  button.active {
    background: black;
    color: white;
  }
</style>
