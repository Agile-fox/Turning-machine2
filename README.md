# Turning Machine - React.js
Apka wybudowana -> https://relaxed-brown-5ea891.netlify.app/

## Użyta Funkcja: </br>
`const turningMachine = (a, b, c, d, e, f) => { 
for (e = 0; d < c; b[e] = f.w, e += f.m, d = f.n) f = a[d]b[e] || 'B']; 
return b; };`

## Ustawienia maszyny:</br>
`const ruleset = {
  q0: {
    1: { w: 'B', m: 1, n: 'q1' },
  },
  q1: {
    1: { w: '1', m: 1, n: 'q1' },
    0: { w: '0', m: 1, n: 'q2' },
    B: { w: '0', m: 1, n: 'q2' },
  },
  q2: {
    1: { w: '1', m: 1, n: 'q2' },
    B: { w: '1', m: -1, n: 'q3' },
  },
  q3: {
    1: { w: '1', m: -1, n: 'q3' },
    0: { w: '0', m: -1, n: 'q3' },
    B: { w: '1', m: 1, n: 'q4' },
  },
  q4: {
    1: { w: 'B', m: 1, n: 'q1' },
    0: { w: '0', m: 1, n: 'q5' },
  },
};`

`const tape = [1, 1, 1];`

`const head = ['q5', 'q0', 0];`

## Przewidywany wynik
Jest on hardcodowany w app.jsx, dotyczy on tylko wyniku który powinnienem uzyskać przy powyższych ustawieniach. Nie zmienia sie automatycznie nawet po zmianie konfiguracji, był on tylko do sprawdzenia czy funkcja działa prawidłowo dla wybranych powyżej wartości do prównania z otrzymanym wynikiem funkcji.

## Zmiana wyświetlanego rulesetu w przeglądarce
Ruleset z konmfiguracji nie jest powiązany z tym wyświetlanym w przeglądarce, zmiana konfiguracji nie zmieni wyświetlanego ruleset ale funkcja pokaże inny wynik w "otrzymany wynik". Aby zmienić wyświetlany ruleset wystarczy w app.jsx podmienci ruleset na nowy użyty. Wyświetlany ruleset nie mógł pobierać danych użytych w funkcji bo tamta zmienna jest nadpisywana a funkcja nie tworzy jej kopi podczas przyjmowania argumentów. 

## modyfikacja maszyny
Trzeba otworzyć plik TurningMachine/MachienConfgi.js
Wystarczy podmienić wartości na inne a w przeglądarce gdzie pisze "otrzymany wynik" pokazę się on. Rulest jest obiektem a tape i head macierzami, trzeba zwracać uwage na poprawny syntax bo wywali apke. 



