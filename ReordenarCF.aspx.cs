using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AlgoritmosCF
{
    public partial class ReordenarCF : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var vector = new int[] { 3, 4, 54, 98, 78, 67, 56, 89, 87, 28 };
            //var vectorOrdenada = ordenada(vector);
            //var vectorQuickSort = quickSort(vector, 0, vector.Length - 1);
            // la forma de llamar al método 
            MergeSort(vector, 0, vector.Length - 1);
            //quickSort(vector, 0, vector.Count() - 1);
            var algo = vector;
        }

        public int[] ordenada(int[] vector)
        {
            int auxiliar;
            for (int i = vector.Length - 1; i > 0; i--)
            {
                for (int j = 0; j < i; j++)
                {
                    if (vector[j] > vector[j + 1])
                    {
                        auxiliar = vector[j];
                        vector[j] = vector[j + 1];
                        vector[j + 1] = auxiliar;
                    }
                }
            }
            return vector;
        }

        public int[] quickSort(int[] vector, int izq, int der)
        {
            int i = izq;
            int j = der;
            int pivot = vector[(izq + der) / 2];
            while (i <= j)
            {
                while (vector[i].CompareTo(pivot) < 0)
                {
                    i++;
                }
                while (vector[j].CompareTo(pivot) > 0)
                {
                    j--;
                }
                if (i <= j)
                {
                    var act = vector[i];
                    vector[i] = vector[j];
                    vector[j] = act;

                    i++;
                    j--;
                }
            }

            if (izq < j)
                quickSort(vector, izq, j);

            if (i < der)
                quickSort(vector, i, der);
            return vector;
        }

        static private void MergeSort(int[] vector, int desde, int hasta)
        {
            // como esta función se llama recursivamente
            // indicamos una condición para salir
            // cuando desde y hasta sean iguales, la lista contiene 1 sólo elemento
            if (desde != hasta)
            {
                // se calcula la mitad del arreglo
                int mitad = (desde + hasta) / 2;

                // llamada recursiva para ordenar la primer mitad
                MergeSort(vector, desde, mitad);

                // llamada recursiva para ordenar la segunda mitad
                MergeSort(vector, mitad + 1, hasta);

                // llamada al método que ordena las mitades
                int[] aux = Merge(vector, desde, mitad, mitad + 1, hasta);

                // copiamos las dos mitades en el arreglo
                Array.Copy(aux, 0, vector, desde, aux.Length);
            }
        }

        // este método es el encargado de mezclar los elementos según corresponda
        public static int[] Merge(int[] vector, int desde1, int hasta1, int desde2, int hasta2)
        {
            int a = desde1;
            int b = desde2;

            // creamos un vector con la cantidad necesaria de elementos
            int[] resultado = new int[hasta1 - desde1 + hasta2 - desde2 + 2];

            // iteramos para llenar el vector
            for (int i = 0; i < resultado.Length; i++)
            {

                // mientras que el valor de b sea distinto del tamaño del vector
                if (b != vector.Length)
                {

                    // ubicamos el elemento de la primer o de la segunda mitad
                    // según corresponda, en el nuevo vector
                    if (a > hasta1 && b <= hasta2)
                    {
                        resultado[i] = vector[b];
                        b++;
                    }
                    if (b > hasta2 && a <= hasta1)
                    {
                        resultado[i] = vector[a];
                        a++;
                    }
                    if (a <= hasta1 && b <= hasta2)
                    {
                        if (vector[b] <= vector[a])
                        {
                            resultado[i] = vector[b];
                            b++;
                        }
                        else
                        {
                            resultado[i] = vector[a];
                            a++;
                        }
                    }
                }
                else // caso contrario
                {
                    if (a <= hasta1)
                    {
                        // guardamos el valor del elemento
                        resultado[i] = vector[a];
                        a++;
                    }
                }
            }
            return resultado;
        }
    }
}