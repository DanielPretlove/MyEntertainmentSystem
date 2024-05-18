To start with clean migrations, 
- delete everything under the 'Migrations' folder
- Open the package manager console (press 'Alt', then press T N O)
- Run the following command to add migrations for the application data
```
add-migration "Initial Migration" -StartupProject MyEntertainmentSystem.Server -Project MyEntertainmentSystem.Data.Access -Context ApplicationDataContext
```
- Run the following command to add migrations for the auth data
```
To add further migrations, modify the data entities, then run the add-migration commands again, eg
```
add-migration "Modified XYZ" -StartupProject MyEntertainmentSystem.Server -Project MyEntertainmentSystem.Data.Access -Context ApplicationDataContext

```

Update-Database -StartupProject MyEntertainmentSystem.Server -Project MyEntertainmentSystem.Data.Access -Context ApplicationDataContext