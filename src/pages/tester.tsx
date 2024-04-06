import * as React from 'react';
import Layout from "@theme/Layout";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder';

export default function MyReactPage() {


	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	return (
		<Layout>
			<h1>My React page</h1>
			<p>This is a React hello</p>
			<FormGroup>
				<FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
				<FormControlLabel required control={<Checkbox />} label="Required" />
				<FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    		</FormGroup>
		</Layout>
		
	);
}
