import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../actions";

const SongList = () => {
	const songsList = useSelector((state) => state.songs);
	const dispatch = useDispatch();

	const renderList = () => {
		return songsList.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							onClick={() => {
								dispatch(selectSong(song));
							}}
							className="ui button primary"
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	};

	return <div className="ui divided list">{renderList()}</div>;
};

export default SongList;
