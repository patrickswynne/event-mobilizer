using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Reactivist.Model
{
    public class CalendarEvent
    {
        [JsonInclude]
        public int Id;
        [JsonInclude]
        public string City;
        [JsonInclude]
        public string Address1;
        [JsonInclude]
        public string Address2;
        [JsonInclude]
        public string State;
        [JsonInclude]
        public string Zipcode;
        [JsonInclude]
        public string Outdoors;
        [JsonInclude]
        public string BathroomAvailable;
        [JsonInclude]
        public string Description;
        [JsonInclude]
        public string EventOrganizer;
        [JsonInclude]
        public string[] Attendees;
        [JsonInclude]
        public int AttendeesCount;
        [JsonInclude]
        public string Date;
    }
}
