import React from "react";
import "./FeaturedMovie.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    let firstDate = new Date(props.item.first_air_date);
    let genres = [];

    for (let i in props.item.genres) {
        genres.push(props.item.genres[i].name);
    }

    let description = props.item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200) + " ...";
    }

    return (
        <section
            className="featured"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
            }}
        >
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {props.item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">
                            {props.item.vote_average} pontos
                        </div>
                        <div className="featured--year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured--seasons">
                            {props.item.number_of_seasons} temporada
                            {props.item.number_of_seasons !== 1 ? "s" : ""}
                        </div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a
                            href={`/watch/${props.item.id}`}
                            className="featured--watchbutton"
                        >
                            ► Assistir
                        </a>
                        <a
                            href={`/list/add/${props.item.id}`}
                            className="featured--mylistbutton"
                        >
                            + Minha Lista
                        </a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros:</strong> {genres.join(", ")}
                    </div>
                </div>
            </div>
        </section>
    );
};
