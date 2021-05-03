using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactRouterPeopleAndCars.Data
{
    public class PeopleAndCarsRepository
    {
        private readonly string _connectionString;
        public PeopleAndCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetPeopleAndCars()
        {
            var context = new PeopleCarsDbContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public void AddPerson(Person person)
        {
            var context = new PeopleCarsDbContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public Person GetPersonById(int id)
        {
            var context = new PeopleCarsDbContext(_connectionString);
            return context.People.FirstOrDefault(predicate => predicate.Id == id);
        }
        public void AddCar(Car car)
        {
            var context = new PeopleCarsDbContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }
        public List<Car> GetCarsForPerson(int id)
        {
            var context = new PeopleCarsDbContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == id).ToList();
        }
        public void DeleteCars(int id)
        {
            var context = new PeopleCarsDbContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE personId = {id}");
        }
        public List<Person> Search(string searchText)
        {
            var context = new PeopleCarsDbContext(_connectionString);
            return context.People
                .Where(p => p.FirstName.ToLower().Contains(searchText.ToLower()) || p.LastName.ToLower().Contains(searchText.ToLower()))
                .Include(p => p.Cars).ToList();
        }
    }
}
