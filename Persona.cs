using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


public class Persona
{
    private string nombre;

    public Persona(string _nombre)
    {
        setNombre(_nombre);
    }

    public Persona(string _nombre, string _apellido)
    {
        setNombre(_nombre, _apellido);
    }
    private void setNombre(string _nombre)
    {
        nombre = _nombre;
    }

    private void setNombre(string _nombre, string _apellido) {
        nombre = _nombre + ' ' + _apellido;
    }
    private string getNombre()
    {
        return nombre;
    }
}
