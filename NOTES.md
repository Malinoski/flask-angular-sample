Integrate Angular to flask program:
```
npm install -g @angular/cli
cd flask-angular-sample
cd ..
ng new flask-angular-sample
```

Create some service:
```
cd flask-angular-sample
ng generate service rest
```

Terminal 1: run Angular:
```
ng serve
```

Terminal 2: run Flask
```
source venv/bin/activate
python RestService.py
```

Check brownser backlend (Flask)
```
http://127.0.0.1:5000/data/
```

Check brownser frontend (Angular)
```
http://127.0.0.1:4200/
```



