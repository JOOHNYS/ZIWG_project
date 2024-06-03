INSERT INTO UZYTKOWNIK
(login, imie, nazwisko, haslo, rodzaj_konta, email)
VALUES ('joohnys', 'Jan', 'Seidel', 'janseidel123', uczen, 'janek.seidel@op.pl');

INSERT INTO UZYTKOWNIK
(login, imie, nazwisko, haslo, rodzaj_konta, email)
VALUES ('majson', 'Maja', 'Skibinska', 'skibidibi123', uczen, 'maja.skbinska@gmail.com');

INSERT INTO UZYTKOWNIK
(login, imie, nazwisko, haslo, rodzaj_konta, email)
VALUES ('olson', 'Ola', 'Gadzinska', 'gadugadu123', uczen, 'ola@gadzinska@gmail.com');

INSERT INTO UZYTKOWNIK
(login, imie, nazwisko, haslo, rodzaj_konta, email)
VALUES ('majaaa', 'Majka', 'Terpiłowska', 'terpilowska123', rodzic, 'maja.terp@gmail.com');

INSERT INTO UZYTKOWNIK
(login, imie, nazwisko, haslo, rodzaj_konta, email)
VALUES ('tszandala', 'Tomasz', 'Szandala', 'tszandala123', nauczyciel, 'tomasz.szandala@pwr.edu.pl');

INSERT INTO UCZEN
(uczen_ID, pesel, adres_ID, klasa_ID, opiekunowie_ID, login)
VALUES (1, '0456849304', 2, 3, 4, 'joohnys');

INSERT INTO UCZEN
(uczen_ID, pesel, adres_ID, klasa_ID, opiekunowie_ID, login)
VALUES (2, '8765897654', 3, 4, 5, 'olson');

INSERT INTO UCZEN
(uczen_ID, pesel, adres_ID, klasa_ID, opiekunowie_ID, login)
VALUES (3, '6543678965', 4, 5, 6, 'majson');

INSERT INTO RODZIC
(rodzic_ID, nr_telefonu, opiekunowie_ID, login)
VALUES (1, '678906543', 2, 'majaaa');

INSERT INTO OCENA
(ocena_ID, stopien, waga, opis, data_wystawienia, uczen_ID, nauczyciel_przedmiotu_ID)
VALUES (1, bardzo dobry, 2, null, TO_DATE('12-12-2023','MM-DD-YYYY'), 2, 3);

INSERT INTO OCENA
(ocena_ID, stopien, waga, opis, data_wystawienia, uczen_ID, nauczyciel_przedmiotu_ID)
VALUES (2, bardzo dobry, 3, null, TO_DATE('13-12-2023','MM-DD-YYYY'), 3, 4);

INSERT INTO OCENA
(ocena_ID, stopien, waga, opis, data_wystawienia, uczen_ID, nauczyciel_przedmiotu_ID)
VALUES (3, bardzo dobry, 4, null, TO_DATE('14-12-2023','MM-DD-YYYY'), 4, 5);

INSERT INTO ADRES 
(adres_ID, ulica_miejscowosci_ID, nr_domu, nr_mieszkania, kod)
VALUES (1, 2, '15', Null, 55200);

INSERT INTO MIEJSCOWOSC
(miejscowosc_ID, nazwa)
VALUES (1, 'Wroclaw');

INSERT INTO ULICE_MIEJSCOWOSCI
(ulice_miejscowosi_ID, miejscowosc_ID, ulica_ID)
VALUES (1,2,3);

INSERT INTO ULICA 
(ulica_ID, nazwa)
VALUES (1, 'Brzeska');

INSERT INTO KLASA 
(klasa_ID, oddział, wychowawca_ID)
VALUES(1,'2B',2);

INSERT INTO PRZEDMIOT
(przedmiot_ID, nazwa)
VALUES (1, 'informatyka');

INSERT INTO NAUCZYCIEL
(nauczyciel_ID, nr_telefonu, czy_wychowawca, login)
VALUES (1, '765567765', 0, 'majaaa');

INSERT INTO LEKCJA
(lekcja_ID, grupa_lekcji_ID, temat, sala)
VALUES (1, 2, 'temat1', 12);








































INSERT INTO BANKI
(Bank_ID, Nazwa)
VALUES (1,'PKO Bank Polski S.A.');

INSERT INTO BANKI
(Bank_ID, Nazwa)
VALUES (2,'Bank Pekao S.A.');

INSERT INTO BANKI
(Bank_ID, Nazwa)
VALUES (3,'mBank S.A.');

INSERT INTO BANKI
(Bank_ID, Nazwa)
VALUES (4,'ING Bank Slaski S.A.');

INSERT INTO BANKI
(Bank_ID, Nazwa)
VALUES (5,'Millenium S.A.');

INSERT INTO BANKI
(Bank_ID, Nazwa)
VALUES (6,'Alior Bank S.A.');




INSERT INTO KLIENCI
(Klient_ID, Imie, Nazwisko, Data_urodzenia, PESEL)
VALUES (1, 'Konto', 'Firmowe', Null, '00000000000');

INSERT INTO KLIENCI
(Klient_ID, Imie, Nazwisko, Data_urodzenia, PESEL)
VALUES (2, 'Piotr', 'Dudek', TO_DATE('12-23-1998','MM-DD-YYYY'), '99226665300');

INSERT INTO KLIENCI
(Klient_ID, Imie, Nazwisko, Data_urodzenia, PESEL)
VALUES (3, 'Jan', 'Kowalski', TO_DATE('09-14-1989','MM-DD-YYYY'), '89226665320');

INSERT INTO KLIENCI
(Klient_ID, Imie, Nazwisko, Data_urodzenia, PESEL)
VALUES (4, 'Jakub', 'Nowak', TO_DATE('04-21-1994','MM-DD-YYYY'), '94226885300');

INSERT INTO KLIENCI
(Klient_ID, Imie, Nazwisko, Data_urodzenia, PESEL)
VALUES (5, 'Tomasz', 'Zielinski', TO_DATE('01-10-1984','MM-DD-YYYY'), '84221165700');




INSERT INTO RACHUNKI
(Rachunek_ID, Numer_rachunku, Klient_ID, Bank_ID)
VALUES (1, '45567854376432785435678970', 1, 1);

INSERT INTO RACHUNKI
(Rachunek_ID, Numer_rachunku, Klient_ID, Bank_ID)
VALUES (2, '45567854376432785435678971', 2, 4);

INSERT INTO RACHUNKI
(Rachunek_ID, Numer_rachunku, Klient_ID, Bank_ID)
VALUES (3, '48567854376416805435678974', 3, 6);

INSERT INTO RACHUNKI
(Rachunek_ID, Numer_rachunku, Klient_ID, Bank_ID)
VALUES (4, '46567854376432785435656347', 4, 3);

INSERT INTO RACHUNKI
(Rachunek_ID, Numer_rachunku, Klient_ID, Bank_ID)
VALUES (5, '45567344376412785435679779', 5, 2);




INSERT INTO POZYCZKI
(Pozyczka_ID, kwota_pozyczki, data_otrzymania, okres_splaty, Rachunek_ID)
VALUES (1, 2000, CURRENT_DATE, 30, 2);

INSERT INTO POZYCZKI
(Pozyczka_ID, kwota_pozyczki, data_otrzymania, okres_splaty, Rachunek_ID)
VALUES (2, 6000, CURRENT_DATE, 60, 3);

INSERT INTO POZYCZKI
(Pozyczka_ID, kwota_pozyczki, data_otrzymania, okres_splaty, Rachunek_ID)
VALUES (3, 2500, CURRENT_DATE, 30, 4);

INSERT INTO POZYCZKI
(Pozyczka_ID, kwota_pozyczki, data_otrzymania, okres_splaty, Rachunek_ID)
VALUES (4, 8000, CURRENT_DATE, 90, 5);






INSERT INTO TRANSAKCJE
(Transakcja_ID, Data_wykonania, Kwota, Rodzaj_transakcji, Rachunek_nadawcy, Rachunek_odbiorcy)
VALUES (1, CURRENT_DATE, 2000, 'Pozyczka', 1, 2);

INSERT INTO TRANSAKCJE
(Transakcja_ID, Data_wykonania, Kwota, Rodzaj_transakcji, Rachunek_nadawcy, Rachunek_odbiorcy)
VALUES (2, CURRENT_DATE, 6000, 'Pozyczka', 1, 3);

INSERT INTO TRANSAKCJE
(Transakcja_ID, Data_wykonania, Kwota, Rodzaj_transakcji, Rachunek_nadawcy, Rachunek_odbiorcy)
VALUES (3, CURRENT_DATE, 2500, 'Pozyczka', 1, 4);

INSERT INTO TRANSAKCJE
(Transakcja_ID, Data_wykonania, Kwota, Rodzaj_transakcji, Rachunek_nadawcy, Rachunek_odbiorcy)
VALUES (4, CURRENT_DATE, 8000, 'Pozyczka', 1, 5);

INSERT INTO TRANSAKCJE
(Transakcja_ID, Data_wykonania, Kwota, Rodzaj_transakcji, Rachunek_nadawcy, Rachunek_odbiorcy)
VALUES (5, CURRENT_DATE, 500, 'Splata', 2, 1);