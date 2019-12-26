import '../styles/h5p-charades.css';
import Charades from '../scripts/h5p-charades';

// This comment tells ESLint about the global H5P variable.
/*
global H5P
*/

// Load library
H5P = H5P || {};
H5P.Charades = Charades;
