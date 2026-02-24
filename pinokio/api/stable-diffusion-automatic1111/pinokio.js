module.exports = {
  title: "Stable Diffusion Automatic1111 (Manual Installation)",
  description: "Manual installation of Stable Diffusion (Automatic1111)",
  icon: "icon.png",
  menu: async (kernel) => {
    return [
      {
        html: '<i class="fa-solid fa-play"></i> Start Server',
        href: "run.json",
        default: true
      },
      {
        html: '<i class="fa-solid fa-rocket"></i>Show WebUI',
        href: "http://127.0.0.1:7860",
        target: "_self"
      }
    ]
  }
}
