using Microsoft.AspNetCore.Mvc;
using Reactivist.Model;
using System;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Reactivist.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CalendarEventsController : ControllerBase
    {
        Random random = new Random();
        public List<CalendarEvent> getEvents() // Dummy data
        {
            List<CalendarEvent> items = new List<CalendarEvent>
            {
               new CalendarEvent { Id=1, City="Dallas", AttendeesCount=3, Description="Celebrate Labor Day", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=2, City="Allen", AttendeesCount=13, Description="Walk for Cause", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=3, City="Sulfur Springs", AttendeesCount=2, Description="A Protest", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=4, City="Dallas", AttendeesCount=20, Description="Swim for fun", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=5, City="Austin", AttendeesCount=20, Description="Night run", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=6, City="Dallas", AttendeesCount=20, Description="birthday party", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=7, City="Houston", AttendeesCount=20, Description="drive along", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=8, City="El Pase", AttendeesCount=20, Description="taco tuesday", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=9, City="Huntsville", AttendeesCount=1, Description="taco Friday", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=10, City="Dallas", AttendeesCount=30, Description="fort night", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() },
               new CalendarEvent { Id=10, City="San Antonio", AttendeesCount=14, Description="bowling party", Date=DateTime.Now.AddDays(random.Next(1, 60)).Date.ToString() }
            };
            return items;
        }

        // GET: /<CalendarEventsController>
        [HttpGet] //get all events
        public IEnumerable<CalendarEvent> Get()
        {
            return getEvents();
        }

        // GET /<CalendarEventsController>/{city} get all events in a city
        [HttpGet("{city}")]
        public List<CalendarEvent> Get(string city)
        {
            IEnumerable<CalendarEvent> eventsList = getEvents();
            return (List<CalendarEvent>)(from a in eventsList
                   where a.City.ToLower().Contains(city == "" ? "" : city.ToLower())
                   select a).ToList();
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
