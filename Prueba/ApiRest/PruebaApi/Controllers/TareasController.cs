using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaApi.Data;
using PruebaApi.Models;

namespace PruebaApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TareasController : ControllerBase
{
    private readonly TareasBdContext _db;

    public TareasController(TareasBdContext db) => _db = db;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Tarea>>> GetAll(CancellationToken ct)
    {
        var response = await _db.Tareas.Where(x => !x.Eliminado).AsNoTracking().ToListAsync(ct);
        return Ok( response.Count() == 0? "No se encontraron valores" : response);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Tarea>> GetByID(int id, CancellationToken ct)
    {
        var query = await _db.Tareas.Where(x => x.TareaId == id && !x.Eliminado).ToListAsync();
        return Ok(query is null ? "No se encontraron valores" : query);
    }

    [HttpPost]
    public async Task<ActionResult<Tarea>> Create(Tarea tarea, CancellationToken ct)
    {
        _db.Tareas.Add(tarea);
       await _db.SaveChangesAsync(ct);
        return Ok(tarea);
    }

    [HttpPut]
    public async Task<IActionResult> Update(Tarea tarea, CancellationToken ct)
    {
        var exist = await _db.Tareas.AnyAsync(x => x.TareaId == tarea.TareaId, ct);
        if (!exist) return NotFound();

        _db.Entry(tarea).State = EntityState.Modified;
        await _db.SaveChangesAsync(ct);
        return Ok(tarea);
    }

    [HttpDelete("{Id:int}")]
    public async Task<IActionResult> Delete(int Id, CancellationToken ct)
    {
        var element = await _db.Tareas.Where(x => x.TareaId == Id && !x.Eliminado).FirstOrDefaultAsync();
        if (element is null) return NotFound();

        element.Eliminado = true;
        await _db.SaveChangesAsync(ct);
        return Ok("Se elimino el elemento");
    }
}