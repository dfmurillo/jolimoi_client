# converter

## Description
Hello Mathilde,
I enjoyed a lo doing this test, I have also added some extra functionalities to show you how can be structured the code in Front-End.  For example, I added a toggle in the Nav to make the conversion with Node.JS or with a Library that I create on Front, the idea from this is that all the hard logic in the front can go in a separated file, ideally in VanillaJS (you never know when we need to migrate things to other Framework) having this separation allow us to encapsulate the important logic in reusable files despite the Framework or Library used.

I have also created an `apis` folder since the idea is to connect multiple APIs, the idea is to preconfigure these calls with logins and baseUrl.

You will also find the complete set of tests, unitary and e2e that can be run as the following documentation.

Ultimately, please find some Demos of the app in these links:
[Working App](https://recordit.co/EeThopNavj)
[Unit test](https://recordit.co/6BLoIQytob)
[E2E test](https://recordit.co/yDi7MwNZFb)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```
