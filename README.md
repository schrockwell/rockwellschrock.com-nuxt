## [rockwellschrock.com](http://rockwellschrock.com/)

### Requirements

- Docker

### Development

```bash
docker-compose up
```

Then browse at https://localhost:5000/

### Production

```bash
docker-compose up # If it's not running already
docker-compose exec app npm run generate
```

The static site output is in `dist/`.
