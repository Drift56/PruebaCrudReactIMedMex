using System;
using System.Collections.Generic;

namespace PruebaApi.Models;

public partial class Tarea
{
    public int TareaId { get; set; }

    public string Titulo { get; set; } = string.Empty;

    public int EstadoId { get; set; }

    public bool Eliminado { get; set; }

    public string Asignado { get; set; } = string.Empty;

}

