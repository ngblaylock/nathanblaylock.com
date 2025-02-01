<script lang="ts">
  import { Btn } from '$PACKAGE';
  import Portal from 'svelte-portal';

  let title = $state('');
  let description = $state('');
  let canonical = $state('');
  let robots = $state(true);

  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      document.querySelector('.modal-backdrop')?.remove();
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
    });
  }

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

<Btn
  class="btn btn-light btn-sm"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Check SEO
</Btn>

<Portal target="body">
  <div
    class="modal modal-lg fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content overflow-hidden">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Check SEO</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div>
          <table class="table mb-0">
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
                <th class="border-0">Allow Robots</th>
                <td class="border-0">{robots}</td>
                <td class="border-0"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</Portal>
