using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.LinkLabel;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace WindowsFormsApp1
{
    public partial class Dados : Form
    {
        Thread t1;

        public estoque aedMarket = new estoque();

        public Dados()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (NameBox.Text != "" && PriceBox.Text != "" && QtdBox.Text != "" && codigoBox.Text != "")
            {
                aedMarket.Adicionar(int.Parse(codigoBox.Text),NameBox.Text, double.Parse(PriceBox.Text), int.Parse(QtdBox.Text));

                aedMarket.AtualizarTabela(listView1);

                codigoBox.Text = "";
                NameBox.Text = "";
                PriceBox.Text = "";
                QtdBox.Text = "";
            }
            else
            {
                MessageBox.Show("Dados incompletos: ");
            }

        }

        private void listView1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void NameBox_TextChanged(object sender, EventArgs e)
        {

        }

        private void Dados_Load(object sender, EventArgs e)
        {
            aedMarket.Ler();

            aedMarket.AtualizarTabela(listView1);

            listView1.View = View.Details;
            listView1.GridLines = true;
            listView1.FullRowSelect = true;

            int baseTam = 70;

            listView1.Columns.Add("Codigo", baseTam);
            listView1.Columns.Add("Nome", baseTam);
            listView1.Columns.Add("Preço", baseTam);
            listView1.Columns.Add("Quantidade", baseTam);

        }

        private void button2_Click(object sender, EventArgs e)
        {
            codigoBox.Text = "";
            NameBox.Text = "";
            PriceBox.Text = "";
            QtdBox.Text = "";
        }

        private void Dados_FormClosing(object sender, FormClosingEventArgs e)
        {
            aedMarket.Salvar();
        }





        private void QtdBox_KeyPress_1(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar))
            {
                // Se não for um número ou tecla de controle, ignora a entrada
                e.Handled = true;
            }
        }

        private void codigoBox_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar))
            {
                // Se não for um número ou tecla de controle, ignora a entrada
                e.Handled = true;
            }
        }

        private void PriceBox_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar) && e.KeyChar != ',')
            {
                // Se não for um número ou tecla de controle, ignora a entrada
                e.Handled = true;
            }

            // Permite apenas uma vírgula
            System.Windows.Forms.TextBox textBox = sender as System.Windows.Forms.TextBox;
            if (e.KeyChar == ',' && textBox != null && textBox.Text.Contains(","))
            {
                e.Handled = true;
            }
        }

        private void abrirjanela(object obj)
        {
            Application.Run(new Form1());
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
            t1 = new Thread(abrirjanela);
            t1.SetApartmentState(ApartmentState.STA);
            t1.Start();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            aedMarket.Remover(aedMarket.EncontrarProduto(int.Parse(codigoRemovedor.Text)));

            aedMarket.AtualizarTabela(listView1);
        }
    }
}


public class produto
{
    public produto proximo;
    public produto anterior;

    public int codigo;
    public string nome;
    public double preco;
    public int quantidade;

    public produto(int codigoInput, string nomeInput, double precoInput, int quantidadeInput)
    {
        anterior = null;
        proximo = null;

        codigo = codigoInput;
        nome = nomeInput;
        preco = precoInput;
        quantidade = quantidadeInput;
    }
}

public class estoque
{
    public produto primeiro;
    public produto ultimo;

    public int quantidadeEmEstoque;

    public estoque()
    {
        primeiro = null;
        ultimo = null;
        quantidadeEmEstoque = 0;
    }

    public void Adicionar(int codigoInput, string nomeInput, double precoInput, int quantidadeInput)
    {
        produto novoProduto = new produto(codigoInput, nomeInput, precoInput, quantidadeInput);

        if (ultimo == null)
        {
            primeiro = novoProduto;
            ultimo = novoProduto;
        }
        else
        {
            novoProduto.anterior = ultimo;
            ultimo.proximo = novoProduto;
            ultimo = novoProduto;
        }
        quantidadeEmEstoque++;
    }

    public void Remover(produto produtoASerRemovido)
    {
        produto aux = produtoASerRemovido;

        produto auxProximo = produtoASerRemovido.proximo;
        produto auxAnterior = produtoASerRemovido.anterior;

        auxAnterior.proximo= auxProximo;
        auxProximo.anterior= auxAnterior;

        aux.anterior = null;
        aux.proximo = null;

        quantidadeEmEstoque--;
    }

    public produto EncontrarProduto(int codigo)
    {
        produto atual = primeiro;

        while (atual != null)
        {
            if (atual.codigo == codigo)
            {
                return atual;
            }
            atual = atual.proximo;
        }
        return null;
    }

    public void Salvar()
    {
        string caminhoDoArquivo = @"ProdutosCadastrados.txt";

        produto atual = primeiro;

        StreamWriter estoqueG = new StreamWriter(caminhoDoArquivo);

        estoqueG.WriteLine(quantidadeEmEstoque.ToString());

        while (atual != null)
        {
            estoqueG.WriteLine($"{atual.codigo};{atual.nome};{atual.preco};{atual.quantidade}");
            atual = atual.proximo;
        }

        estoqueG.Close();

    }

    public void Ler()
    {
        string caminhoDoArquivo = @"ProdutosCadastrados.txt";

        StreamReader estoqueReader = new StreamReader(caminhoDoArquivo);

        int N = int.Parse(estoqueReader.ReadLine());

        for (int i = 0; i < N; i++)
        {
            string[] linha = estoqueReader.ReadLine().Split(';');
            Adicionar(int.Parse(linha[0]), linha[1], double.Parse(linha[2]), int.Parse(linha[3]));
        }

        estoqueReader.Close();

        quantidadeEmEstoque = N;

    }

    public void AtualizarTabela(System.Windows.Forms.ListView listView1)
    {
        listView1.Items.Clear();

        produto atual = primeiro;

        while (atual != null)
        {
            string temp = $"{atual.codigo}";
            ListViewItem item = new ListViewItem(temp);

            item.SubItems.Add($"{atual.nome}");
            item.SubItems.Add($"R$ {atual.preco}");
            item.SubItems.Add($"{atual.quantidade}");

            listView1.Items.Add(item);
            atual = atual.proximo;
        }

    }

}
