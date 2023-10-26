using System;
using System.IO;

class Program
{
    public static void Main(string[] args)
    {
        int op = 0;

        do
        {

            Console.WriteLine("---Exemplo---");
            Console.WriteLine("1 - Algo 1");
            Console.WriteLine("2 - Algo 2");
            Console.WriteLine("------");
            op = int.Parse(Console.ReadLine());
        }
        while (op < 0 || op > 2);

        funcao(op);
    }

    public static void funcao(int num)
    {

        Console.Write("/");
        for (int i = 0; i < num; i++)
        {
            Console.Write(num);
        }
        Console.Write("/");

    }
}