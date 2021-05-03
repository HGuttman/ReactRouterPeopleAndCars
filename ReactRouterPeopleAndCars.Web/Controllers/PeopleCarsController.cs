using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactRouterPeopleAndCars.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactRouterPeopleAndCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private readonly string _connectionString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("GetAll")]
        [HttpGet]
        public List<Person> GetPeople()
        {
            var repo = new PeopleAndCarsRepository(_connectionString);
            return repo.GetPeopleAndCars();
        }
        [Route("AddPerson")]
        [HttpPost]
        public void AddPerson(Person person)
        {
            var repo = new PeopleAndCarsRepository(_connectionString);
            repo.AddPerson(person);

        }
        [Route("AddCar")]
        [HttpPost]
        public void AddCar(Car car)
        {
            var repo = new PeopleAndCarsRepository(_connectionString);
            repo.AddCar(car);
        }
        [Route("GetById")]
        [HttpGet]
        public Person GetById(int id)
        {
            var repo = new PeopleAndCarsRepository(_connectionString);
            return repo.GetPersonById(id);
        }
        [Route("GetCarsForPerson")]
        [HttpGet]
        public List<Car> GetCarsForPerson(int id)
        {
            var repo = new PeopleAndCarsRepository(_connectionString);
            return repo.GetCarsForPerson(id);
        }
        [Route("DeleteCars")]
        [HttpPost]
        public void DeleteCars(int id)
        {
            var repo = new PeopleAndCarsRepository(_connectionString);
            repo.DeleteCars(id);
        }

        [Route("Search")]
        [HttpGet]
        public List<Person> Search(string searchText)
        {
            var repo = new PeopleAndCarsRepository(_connectionString);
            return repo.Search(searchText);
        }
    }
}
