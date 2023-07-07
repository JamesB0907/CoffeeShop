using Microsoft.AspNetCore.Mvc;
using CoffeeShop.Models;
using CoffeeShop.Repositories;

namespace CoffeeShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeController : ControllerBase
    {
        private readonly ICoffeeRepository _CoffeeRepository;
        public CoffeeController(ICoffeeRepository CoffeeRepository)
        {
            _CoffeeRepository = CoffeeRepository;
        }

        // https://localhost:5001/api/Coffee/
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_CoffeeRepository.GetAllCoffee());
        }

        // https://localhost:5001/api/Coffee/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var coffee = _CoffeeRepository.Get(id);
            if (coffee == null)
            {
                return NotFound();
            }
            return Ok(coffee);
        }

        // https://localhost:5001/api/Coffee/
        [HttpPost]
        public IActionResult Post(Coffee coffee)
        {
            _CoffeeRepository.Add(coffee);
            return CreatedAtAction("Get", new { id = coffee.Id }, coffee);
        }

        // https://localhost:5001/api/Coffee/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Coffee coffee)
        {
            if (id != coffee.Id)
            {
                return BadRequest();
            }

            _CoffeeRepository.Update(coffee);
            return NoContent();
        }

        // https://localhost:5001/api/Coffee/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _CoffeeRepository.Delete(id);
            return NoContent();
        }
    }
}