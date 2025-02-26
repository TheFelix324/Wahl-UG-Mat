"use strict";

function _classCallCheck(instance, Constructor) { 
    if (!(instance instanceof Constructor)) { 
        throw new TypeError("Cannot call a class as a function"); 
    } 
}

function _defineProperties(target, props) { 
    for (var i = 0; i < props.length; i++) { 
        var descriptor = props[i]; 
        descriptor.enumerable = descriptor.enumerable || false; 
        descriptor.configurable = true; 
        if ("value" in descriptor) descriptor.writable = true; 
        Object.defineProperty(target, descriptor.key, descriptor); 
    } 
}

function _createClass(Constructor, protoProps, staticProps) { 
    if (protoProps) _defineProperties(Constructor.prototype, protoProps); 
    if (staticProps) _defineProperties(Constructor, staticProps); 
    return Constructor; 
}

var T = /*#__PURE__*/ function () {
    function T() {
        _classCallCheck(this, T);

        this.page_title = "Wahl-UG-Mat";
        this.qa_modal_title = "Fragen &amp; Antworten";
        
        this.qa_modal_body = '<h4>Impressum</h4>\
            <h5>Angaben gemäß § 5 TMG:</h5>\
            <p>Felix Hahn<br>\
            Zu den Linden 10/1<br>\
            72379 Hechingen</p>\
            <h5>Kontakt:</h5>\
            <p>E-Mail: felix.hahn-ffm[at]outlook.de</p>\
            <h5>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h5>\
            <p>Felix Hahn<br>\
            Zu den Linden 10/1<br>\
            72379 Hechingen</p>\
            <h5>Haftungsausschluss:</h5>\
            <p>Die Inhalte dieser Website wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt. \
            F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte \
            k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen.</p>\
            <h5>Haftung f&uuml;r Links:</h5>\
            <p>Diese Website enth&auml;lt m&ouml;glicherweise Links zu externen Websites Dritter, \
            auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese \
            fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.</p>\
            <h5>Urheberrecht:</h5>\
            <p>Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. \
            Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung \
            au&szlig;erhalb der Grenzen des Urheberrechts bed&uuml;rfen der schriftlichen Zustimmung \
            des jeweiligen Autors bzw. Erstellers.</p>\
            <h5>Weiteres:</h5>\
            <p>Dies ist keine offizielle Seite des Uhlandygmnasiums, sie wurde von einem Schüler erstellt.</p>';

        this.btn_qa_modal_close = "Schließen";
        this.swype_info_message_text = "Wische, um manuell zwischen Thesen zu wechseln";
        this.btn_swype_info_ok = "OK";
        this.start_subtitle = "Der Wahl-UG-Mat ist ein Wahlpositions&shy;vergleichswerkzeug für die Schule als Staat Partei Wahl des Uhlandgymnasiums.";
        this.start_explanatory_text = "<p>Der Wahl-UG-Mat ermöglicht es dir, deine Meinung zu ausgewählten Thesen mit denen der Parteien zu vergleichen, die zur Wahl\
                            antreten.\
                        </p>\
                        <p>Für ihre Stellungnahmen zu den Thesen sind die Parteien selbst verantwortlich.</p>";
        this.btn_start = "Wahl-UG-Mat starten!";
        this.btn_start_show_qa = "Fragen &amp; Antworten";
        this.btn_toggle_thesis_more_text = "Erläuterung";
        this.btn_important = "These doppelt gewichten";
        this.btn_yes_text = "Zustimmung";
        this.btn_neutral_text = "Neutral";
        this.btn_no_text = "Ablehnung";
        this.btn_skip_text = "Überspringen";
        this.btn_mahlowat_show_start = "Zurück zur Startseite";
        this.btn_mahlowat_show_qa = "Fragen &amp; Antworten";
        this.btn_mahlowat_skip_remaining_theses = "Alle verbleibenden Thesen überspringen und aktuellen Stand auswerten";
        this.title_results = "Ergebnis";
        this.title_results_summary = "Zusammenfassung";
        this.text_result_below_summary = '<small>Nicht zufrieden mit dem Ergebnis?\
                    <button class="btn btn-sm btn-light" onclick="showMahlowatFirstThesis()">Ändere die Antworten oder die Gewichtung!</button>\
                </small>';
        this.title_results_details = "";
        this.btn_results_show_start = "Zurück zur Startseite";
        this.btn_results_show_qa = "Fragen &amp; Antworten";
    }

    _createClass(T, [{
        key: "thesis_number",
        value: function thesis_number(number) {
            return "These " + number;
        }
    }, {
        key: "achieved_points_text",
        value: function achieved_points_text(pointsForList, maxAchievablePoints) {
            return '' + pointsForList + '/' + maxAchievablePoints + ' Punkte';
        }
    }, {
        key: "btn_make_thesis_double_weight",
        get: function get() {
            return "These doppelt gewichten";
        }
    }, {
        key: "btn_thesis_has_double_weight",
        get: function get() {
            return "These wird doppelt gewichtet";
        }
    }, {
        key: "label_your_choice",
        get: function get() {
            return "Deine Wahl";
        }
    }, {
        key: "default_text_no_statement",
        get: function get() {
            return "<small class='text-muted'>Keine Stellungnahme.</small>";
        }
    }, {
        key: "error_loading_config_file",
        get: function get() {
            return '<b>Fehler</b> Die Konfigurationsdatei <a href="config/data.json"><tt>config/data.json</tt></a> konnte nicht geladen\
            werden. Existiert sie und enthält keine Syntaxfehler?';
        }
    }]);

    return T;
}();
