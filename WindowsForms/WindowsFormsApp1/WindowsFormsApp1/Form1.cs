using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Threading;
using System.IO;
using System.Collections;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        Thread t1;

        public Form1()
        {
            InitializeComponent();
        }

        private void chart1_Click(object sender, EventArgs e)
        {

        }

        private void numericUpDown1_ValueChanged(object sender, EventArgs e)
        {
            int valorNumericUpDown = (int)numericUpDown1.Value;
            progressBar1.Value = valorNumericUpDown;
        }

        private void progressBar1_Click(object sender, EventArgs e)
        {
            progressBar1.Minimum = 0;
            progressBar1.Maximum = 100;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //Dados novoForm = new Dados();

            //novoForm.ShowDialog();
            //novoForm.Show();
            //this.Hide();

            this.Close();
            t1 = new Thread(abrirjanela);
            t1.SetApartmentState(ApartmentState.STA);
            t1.Start();
        }

        private void abrirjanela(object obj)
        {
            //obj.Start();
            Application.Run(new Dados());
        }

        private void Form1_Load(object sender, EventArgs e)
        {

            string caminhoDoArquivo = @"ProdutosCadastrados.txt";

            try
            {
                // Verifica se o arquivo já existe
                if (!File.Exists(caminhoDoArquivo))
                {
                    // Cria o arquivo
                    StreamWriter estoqueWriter = new StreamWriter(caminhoDoArquivo);

                    estoqueWriter.WriteLine("0");
                    estoqueWriter.Close();

                }

            }
            catch (Exception ex)
            {
                MessageBox.Show("Ocorreu um erro ao criar o arquivo: " + ex.Message);
            }

        }

    }
}
