import React from "react";
import { useSelector } from "react-redux";

const SongList = () => {
	const songsList = useSelector((state) => state.songs);

	const renderList = () => {
		return songsList.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary">Select</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	};

	return <div className="ui divided list">{renderList()}</div>;
};

export default SongList;
