using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ReactRouterPeopleAndCars.Data
{
    public class PeopleCarsContextFactory : IDesignTimeDbContextFactory<PeopleCarsDbContext>
    {
        public PeopleCarsDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactRouterPeopleAndCars.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new PeopleCarsDbContext(config.GetConnectionString("ConStr"));
        }
    }
}
