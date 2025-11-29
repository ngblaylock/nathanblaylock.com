<script lang="ts">
  let title = $state('');
  let description = $state('');
  let canonical = $state('');
  let robots = $state(true);
  let showModal = $state(false);

  $effect(() => {
    title = document.title;
    description =
      (document.querySelector('meta[name="description"]') as HTMLMetaElement)
        ?.content || '';
    let norobotsValue = (
      document.querySelector('meta[name="robots"]') as HTMLMetaElement
    )?.content;
    robots = norobotsValue
      ? !norobotsValue.includes('noindex') &&
        !norobotsValue.includes('nofollow')
      : true;
    canonical =
      (document.querySelector('link[rel="canonical"]') as HTMLLinkElement)
        ?.href || '';
  });
</script>

<GBtn
  variant="light"
  class="btn-sm"
  onclick={() => (showModal = true)}
>
  Check SEO
</GBtn>

<GModal
  bind:show={showModal}
  title="Check SEO"
  size="lg"
>
  <div class="table-responsive">
    <table class="table">
      <tbody>
        <tr>
          <th>Title</th>
          <td>{title}</td>
          <td>{title.length}/60</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{description}</td>
          <td>{description.length}/160</td>
        </tr>
        <tr>
          <th>Canonical</th>
          <td>{canonical}</td>
          <td></td>
        </tr>
        <tr>
          <th>Allow Robots</th>
          <td>{robots}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</GModal>
