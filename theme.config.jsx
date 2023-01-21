export default {
  editLink: {
    text: ''
  },
  feedback: {
    content: ''
  },
  footer: {
    text: 'insim docs',
    editOnGitHubLink: false
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta httpEquiv="Content-Language" content="pt-BR" />
      <meta name="description" content="insim docs: Documentação de InSim" />
      <meta name="twitter:site" content="https://insim-docs.vercel.app/" />
      <meta property="og:title" content="insim docs: Documentação de InSim" />
      <meta property="og:description" content="insim docs: Documentação de InSim" />
      <meta name="apple-mobile-web-app-title" content="insim docs" />
    </>
  ),
  logo: <span>insim docs</span>,
  project: {
    link: 'https://github.com/MrSev7en/insim-docs'
  },
  search: {
    placeholder: 'Procurar na documentação...',
    emptyResult: (
      <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        Nenhum resultado foi encontrado.
      </span>
    )
  },
  toc: {
    title: 'Nessa página'
  },
  useNextSeoProps: () => ({ titleTemplate: '%s · insim docs' })
}
