class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Daniel Giovanny Garcia Hurtado`;
  }
}
customElements.define("mi-footer", MiFooter);
