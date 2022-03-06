import { FC, useEffect, useState } from "react";
import { useItems, useMovies } from "../../../hooks";
import { StarRating } from "../Rating";
import { useParams } from "react-router-dom";
import { Trailer } from "../../../types/models";

type Params = {
    id: string
}






const DetailCard: FC = () => {
    const { getDetail, detail } = useItems()
    const { getTrailer } = useMovies()
    const [trailer, setTrailer] = useState<Trailer>()
    const { id } = useParams<Params>()



    useEffect(() => {
        getDetail(id);
    }, [id]);

    useEffect(() => {
        getTrailer(detail?.id).then((results) => setTrailer(results))
    }, [detail])

    return (<>
        {detail?.id !== undefined && (
            <div className="container">
                <div className="card undefined">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-7">
                                <header>
                                    <h1>{detail.title || detail.name}</h1>
                                    <h2>{detail.original_title}</h2>
                                    <StarRating rating={detail?.vote_average}></StarRating>
                                </header>
                                <section className="body">
                                    <div className="overvie mt-4"></div>
                                    <ul className="mt-4">
                                        <li>
                                            ::marker
                                            <strong>Fecha de lanzamiento:</strong>
                                            {detail.release_date}
                                        </li>
                                        <li>
                                            ::marker
                                            <strong>Lenguaje original</strong>
                                            {detail.original_language}
                                        </li>
                                    </ul>
                                </section>
                                <section className="mt-5">
                                    <h3 className="text-white">Trailer</h3>
                                    <div className="row mt-4">
                                        <div className="col-md-12 mb-3">
                                            <iframe width="100%" height="320" src={`https://www.youtube.com/embed/${trailer?.key}`} title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                            </iframe>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-5">
                                <img src={`http://image.tmdb.org/t/p/w500${detail?.poster_path}`} alt={detail.title} className='img-responsive' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
    </>
    )
}

export { DetailCard }