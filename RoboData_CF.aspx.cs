using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net;
using System.Xml;
using HtmlAgilityPack;

namespace AlgoritmosCF
{
    public partial class RoboData_CF : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            HtmlAgilityPack.HtmlWeb web = new HtmlWeb();
            HtmlAgilityPack.HtmlDocument doc = web.Load("http://www.guiaautomotriz.com.co/carros/baterias-bogota");

            var nodosCompany = doc.DocumentNode.SelectNodes("//div[@class = 'company-info']");
            //var algo = 
            var listaOfertas = new List<OfferData>();
            for (int i = 0; i < nodosCompany.Count; i++)
            {
                var OfferPivot = new OfferData();
                var pivote = nodosCompany[i];
                OfferPivot.Description = string.Empty;
                OfferPivot.Description = pivote.SelectNodes("//h3[@class = 'textLabel']")[0].InnerText;
                OfferPivot.Address = pivote.SelectNodes("//h3[@class = 'textLabel']/../span")[0].InnerText;
                var telefonos = pivote.SelectNodes("//span[@class = 'phone-right']");
                var telefono = new List<string>();
                for (int k = 0; k < telefonos.Count; k++)
                {
                    string phonePivot = string.Empty;
                    phonePivot = telefonos[k].InnerText;
                    telefono.Add(phonePivot);
                }
                OfferPivot.Phones = telefono;
                listaOfertas.Add(OfferPivot);
                //    OfferPivot.Phones = telefono;
                //    listaOfertas.Add(OfferPivot);
                //var OfferPivot = new OfferData();
                //var pivot = nodosCompany[i].ChildNodes;
                //for (int j = 0; j < 1; j++) {
                //    OfferPivot.Description = pivot[j].SelectNodes("//h3[@class = 'textLabel']")[0].InnerText;
                //    OfferPivot.Address = pivot[j].SelectNodes("//h3[@class = 'textLabel']/../span")[0].InnerText;
                //    var telefonos = pivot[j].SelectNodes("//span[@class = 'phone-right']");
                //    var telefono = new List<string>();
                //    for (int k = 0; k < telefonos.Count; k++) {
                //        string phonePivot = string.Empty;
                //        phonePivot = telefonos[k].InnerText;
                //        telefono.Add(phonePivot);
                //    }
                //    OfferPivot.Phones = telefono;
                //    listaOfertas.Add(OfferPivot);
                //}
                
            }

        }
    }


    public class OfferData {
        public string Description { get; set; }
        public string Address { get; set; }
        public List<string> Phones { get; set; }
        public List<string> Mails { get; set; }
        public List<string> WebPages { get; set; }
    }
}