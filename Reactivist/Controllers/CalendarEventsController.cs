using Microsoft.AspNetCore.Mvc;
using Reactivist.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Reactivist.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CalendarEventsController : ControllerBase
    {
        Random random = new Random();

        // GET: api/<CalendarEventsController>
        [HttpGet]
        public IEnumerable<CalendarEvent> Get()
        {
            List<CalendarEvent> items = new List<CalendarEvent>
            {
               new CalendarEvent { Id=1, City="Dallas", Description="Celebrate Labor Day", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=2, City="Allen", Description="Walk for Cause", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() }
            };
            return items;
        }

        // GET api/<CalendarEventsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CalendarEventsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CalendarEventsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CalendarEventsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
