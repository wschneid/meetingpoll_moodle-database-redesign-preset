/* Die gesamte Logik steckt bewusst in den einzelnen Vorlagen (add/single/list).
   Moodle bindet diese Datei ueber $PAGE->requires->js(..., true) im <head> ein,
   also noch bevor das DOM der Aktivitaet existiert; sie eignet sich deshalb nur
   fuer Code, der auf DOMContentLoaded wartet. Absichtlich leer gelassen. */
