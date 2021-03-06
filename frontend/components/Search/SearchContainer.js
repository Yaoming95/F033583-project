/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {connect} from 'react-redux';
import SearchComponent from "./SearchComponent";

const PLAY_SONG = 'PLAY_SONG';

const playSong = (song) => {
  return {type: PLAY_SONG, isPlaying: true, song}
};

const mapStateToProps = (state) => {
  return {
    query: state.resultReducer.query,
    results: state.resultReducer.results,
    stats: state.resultReducer.stats,
    loading: state.resultReducer.loading
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (song) => {
      dispatch(playSong(song));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
