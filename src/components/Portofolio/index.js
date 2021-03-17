import React from "react";
import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../Home";
import covid from "../images/covid.png";
import passworgG from "../images/passworgG.png";
import workplanner from "../images/workplanner.png";
import sc from "../images/sc.png";
import quiz from "../images/quiz.png";
import burger from "../images/burger.png";
import resume from "../images/resume.png";

function Portofolio() {
  return (
    <div>
      <Header />

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="block-header text-success"><strong>Projects</strong></h1>

          </div>
        </div>


        <div class="row">
          <div class="col-sm col-md-4 col-lg-4">
            <figure class="figure">
              <a href="https://mohamedahmed-1980.github.io/covid-19-tracker/" >
                <img src={covid} class="figure-img img-fluid project" alt="A generic square placeholder image with rounded corners in a figure." />
                <figcaption class="figure-caption">Covid Tracker</figcaption>
              </a>
            </figure>
            <p>A Covid-19 information dashboard that allows the user to lookup a specific country's covid statistics. The user will see the country's flag along with other important data points like covid deaths, death rate, and recovery rate. Users will also see a gif animation displaying how dangerous it is to travel to that country based on its death rate.</p>
            <a href="https://github.com/mohamedahmed-1980/covid-19-tracker.git">
              <button type="button" class="btn btn-success">github</button>
            </a>

          </div>

          <div class="col-sm col-md-4 col-lg-4">
            <figure class="figure">
              <a href="https://mohamedahmed-1980.github.io/Password-generator/">
                <img src={passworgG} class="figure-img img-fluid project" alt="A generic square placeholder image with rounded corners in a figure." />
                <figcaption class="figure-caption">Password Generator</figcaption>
              </a>
            </figure>
            <p>This application emphasizes the use of Javascript to generate a random, secure password for the user. this project appaly javascript to generate random password.</p>

            <a href="https://github.com/mohamedahmed-1980/Password-generator.git">
              <button type="button" class="btn btn-success">github</button>
            </a>

          </div>


          <div class="col-sm col-md-4 col-lg-4">
            <figure class="figure">
              <a href="https://mohamedahmed-1980.github.io/WORK-PLANNER-/">
                <img src={workplanner} class="figure-img img-fluid project" alt="A generic square placeholder image with rounded corners in a figure." />
                <figcaption class="figure-caption">WORK-PLANNER-</figcaption>
              </a>
            </figure>
            <p>This application creates a simple calendar application that allows the user to save events for each hour of the day.
            The app should display standard business hours (8 a.m. to 4 p.m.). Each time slot should represent one hour and contain the following:
<br />
The time
<br />
 A field to hold user input
<br />
A save button

</p>
            <a href="https://github.com/mohamedahmed-1980/WORK-PLANNER-.git">
              <button type="button" class="btn btn-success">github</button>
            </a>
            <hr />
          </div>
        </div>
      </div>

      <div class="container">
        <main class="row">
          <div class="col-md-12">

          </div>
        </main>

        <div class="row">
          <div class="col-sm col-md-4 col-lg-4">
            <figure class="figure">
              <a href=" https://mohamedahmed-1980.github.io/WEATHER_APP/">
                <img src={sc} class="figure-img img-fluid project" alt="A generic square placeholder image with rounded corners in a figure." />
                <figcaption class="figure-caption">Weather App </figcaption>
              </a>
            </figure>
            <p>A weather app that allows the user to check any city's weather world wide.
            WHEN I search for a city THEN I am presented with current and future conditions
            for that city and that city is added to the search history WHEN I view current
            weather conditions for that city THEN I am presented with the city name, the
            date, an icon representation of weather conditions, the temperature, the humi
            dity, the wind speed, and the UV index WHEN I view the UV index THEN I am pre
            sented with a color that indicates whether the conditions are favorable, mode
            rate, or severe WHEN I view future weather conditions for that city THEN I am
            presented with a 5-day forecast that displays the date, an icon representati
            on of weather conditions, the temperature, and the humidity WHEN I click on
            a city in the search history THEN I am again presented with current and fut
            ure conditions for that city WHEN I open the weather dashboard THEN I am pre
            sented with the last searched city forecast
</p>
            <a href="https://github.com/mohamedahmed-1980/WEATHER_APP.git">
              <button type="button" class="btn btn-success">github</button>
            </a>

          </div>

          <div class="col-sm col-md-4 col-lg-4">
            <figure class="figure">
              <a href="https://mohamedahmed-1980.github.io/Web-APIs-Code-Quiz/">
                <img src={quiz} class="figure-img img-fluid project" alt="A generic square placeholder image with rounded corners in a figure." />
                <figcaption class="figure-caption">Quiz</figcaption>
              </a>
            </figure>
            <p>In this project I create a timed coding quiz with multiple-choice questions.
            This app will run in the browser, and will feature dynamically updated HTML
   and CSS powered by JavaScript code.</p>

            <a href="https://github.com/mohamedahmed-1980/Web-APIs-Code-Quiz.git">
              <button type="button" class="btn btn-success">github</button>
            </a>

          </div>


          <div class="col-sm col-md-4 col-lg-4">
            <figure class="figure">
              <a href="https://peaceful-refuge-28533.herokuapp.com/">
                <img src={burger} class="figure-img img-fluid project" alt="A generic square placeholder image with rounded corners in a figure." />
                <figcaption class="figure-caption">Burger App</figcaption>
              </a>
            </figure>
            <p>In this project, I create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM . I follow the MVC design pattern; I used Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

</p>
            <a href="https://github.com/mohamedahmed-1980/burger.git">
              <button type="button" class="btn btn-success">github</button>
            </a>
            <hr />
          </div>

          <div class="container">
            <main class="row">
              <div class="col-md-12">
                <article class="block">
                  <h1 class="block-header text-success"><strong>Resume</strong></h1>
                  <hr />
                  <a href="https://docs.google.com/document/d/1_Pvz0qQkJyu6tPoSASfKubo9VjfNvVbPmWPyA_2bj2I/edit?usp=sharing"> <img src={resume} alt="resume" /></a>
                </article>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </div>

  )
}
export default Portofolio