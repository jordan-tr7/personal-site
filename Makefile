
environment:
	conda env create --name website -f environment.yml

go: 
	cd taj-site && npm run dev