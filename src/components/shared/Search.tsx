import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";

interface SearchProps {
	placeholder: string;
}

function Search({ placeholder }: SearchProps) {
	return (
		<Paper component="form"
					 sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder={placeholder}
				inputProps={{ 'aria-label': placeholder.toLowerCase() }}
			/>
			<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
				<SearchIcon/>
			</IconButton>
		</Paper>
	)
}

export default Search;
