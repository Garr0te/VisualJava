from datetime import datetime


def ordenarPerNom(alumnes):
    alumnes.sort(key=lambda x: x['nom'])
    return alumnes


def ordenarPerData(alumnes):
    def naix(element):
        return datetime.strptime(element['data_naiximent'], '%d-%m-%Y')
    alumnes.sort(key=naix)
    return alumnes
