class Movie
{
    constructor(title, rating)
    {
        this.title = title;
        this.rating = rating;
    }
}

class Database
{
    constructor()
    {
        this.movieList = [];
        this.setUpPage();
    }
    setUpPage()
    {
        $("#title").css("text-align", "center");
        $("h1").css("font-size", "5rem");
        $("h3").css("font-size", "2.5rem");
        $("#movie-form").css({
            "display":"inline-block", 
            "margin":"auto", 
            "border":"5px solid",
            "padding":"10px"
        });
        this.handleSubmit = this.addMovie.bind(this);
        $("#submit-movie").on("click", this.handleSubmit);
    }
    addMovie(evt)
    {
        evt.preventDefault();
        const title = $("#movie-title").val();
        const rating = $("#movie-rating").val();
        if (rating < 1)
        {
            rating = 1;
        }
        if (rating > 10)
        {
            rating = 10;
        }
        let isNew = true;
        for (const movie of this.movieList)
        {
            if (movie.title === title)
            {
                isNew = false;
                movie.rating = rating;
            }
        }
        if (isNew)
        {
            const newMovie = new Movie(title, rating);
            this.movieList.push(newMovie);
        }
        this.displayMovies();
    }
    removeMovie(evt)
    {
        const index = +evt.target.id;
        this.movieList.splice(index, 1);
        this.displayMovies();
    }
    displayMovies()
    {
        $("#movie-list").empty();
        for (let i = this.movieList.length - 1; i >= 0; i--)
        {
            $("#movie-list").append(`<li>Title: ${this.movieList[i].title} Rating = ${this.movieList[i].rating} &ensp; <button id="${i}">Delete</button></i>`);
            this.handleRemove = this.removeMovie.bind(this);
            $(`#${i}`).on("click", this.handleRemove);
        }
    }
}

const database = new Database();