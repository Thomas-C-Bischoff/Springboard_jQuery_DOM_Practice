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
        const rating = $("movie-rating").val();
        const newMovie = new Movie(title, rating);
        this.movieList.push(newMovie);
    }
    sortMovies()
    {
        
    }
}

const database = new Database();