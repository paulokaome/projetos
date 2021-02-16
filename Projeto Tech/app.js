const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: '',
    carrinho: [],
    msgAlerta: "Item Adicionado",
    alertaActive: false,
    carrinhoAtivo: false,
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    maiuscula(valor) {
      return valor.toUpperCase();
    }
  },
  methods: {
    fetchProdutos() {
      fetch('./api/produtos.json')
        .then(r => r.json())
        .then(r => {
          this.produtos = r;
        })
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then(r => r.json())
        .then(r => {
          this.produto = r
        })
    },
    fecharModal(event) {
      if (event.target === event.currentTarget) return this.produto = false

    },
    clickForadoCarinho(event) {
      if (event.target === event.currentTarget) return this.carrinhoAtivo = false

    },
    abrirModal(id) {
      this.fetchProduto(id)
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    adicionarItem() {
      this.produto.estoque--;
      const { nome, preco, id } = this.produto;
      this.carrinho.push({ id, nome, preco })
      this.alerta(`${nome} foi adicionado ao carrinho`)

    },
    removerItem(index) {
      this.carrinho.splice(index, 1)
    },
    checarLocalStoraged() {
      if (window.localStorage.carrinho) this.carrinho = JSON.parse(window.localStorage.carrinho);
    },
    compararEstoque() {
      const items = this.carrinho.filter(item => {
        if (item.id === this.produto.id) return true
      });
      this.produto.estoque -= items;
    },
    alerta(msg) {
      this.msgAlerta = msg;
      this.alertaActive = true
      setTimeout(() => {
        this.alertaActive = false
      }, 2000)
    },
    router() {
      const hash = document.location.hash;
      if (hash) {
        this.fetchProduto(hash.replace("#", "").trim())
      }

    },
  },
  computed: {
    carrinhoTotal() {
      let total = 0;
      if (this.carrinho.length) {
        this.carrinho.forEach(item => {
          total += item.preco;
        })
      }
      return total
    }
  },
  watch: {
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
    produto() {
      document.title = this.produto.nome || "Techno";
      const hash = this.produto.nome || "";
      history.pushState(null, null, `${hash}`)
      if (this.produto) this.compararEstoque();
    }
  },
  created() {
    this.fetchProdutos();
    this.checarLocalStoraged();
    this.router();
  },
})