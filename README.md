# Landing Page - Rénovation Salle de Bain

Landing page professionnelle pour la génération de leads dans le secteur de la rénovation de salles de bain en France.

## 📋 Sections Incluses

1. **Hero Section** - En-tête avec titre accrocheur, sous-titre, CTA principal et badges de confiance
2. **Social Proof** - Statistiques clés (2,400+ projets, 98% satisfaction, etc.)
3. **Galerie Avant/Après** - 4 projets de transformation avec images comparatives
4. **Témoignages** - 4 avis clients détaillés avec notes 5 étoiles
5. **FAQ** - 6 questions fréquentes avec système d'accordéon interactif
6. **Formulaire de Qualification** - Collecte détaillée de 8 champs requis
7. **Footer** - Informations de contact et liens utiles

## 🎯 Formulaire de Qualification

Le formulaire collecte les informations suivantes :

1. **Type de rénovation** (dropdown)
   - Remplacement baignoire → douche
   - Rénovation complète
   - Douche (Création ou Modification)
   - Accessibilité (Senior / PMR)

2. **Budget prévu** (dropdown)
   - 5 000 € - 10 000 €
   - 10 000 € - 20 000 €
   - Plus de 20 000 €

3. **Délai souhaité** (dropdown)
   - Dès que possible
   - 1-2 mois
   - 2-4 mois
   - 4-6 mois

4. **Statut du bien** (dropdown)
   - Propriétaire Occupant
   - Propriétaire Bailleur
   - Locataire (avec accord propriétaire)

5. **Motivation principale** (dropdown)
   - Urgence (fuite, panne)
   - Confort
   - Sécurité
   - Esthétique
   - Valorisation du bien
   - Mise en location

6. **Photos actuelles** (upload multiple, minimum 2 requis)
   - Validation JavaScript pour garantir au moins 2 photos
   - Message d'avertissement clair
   - Support drag & drop

7. **Coordonnées** (nom, prénom, email, téléphone)
   - Tous les champs requis
   - Validation en temps réel

8. **Consentement** (case à cocher obligatoire)
   - "Je suis prêt(e) à être contacté(e) rapidement par un professionnel pour un devis."

### Intégration Formspree

**Endpoint configuré :** `https://formspree.io/f/xeezdzlj`

Le formulaire envoie toutes les données (y compris les fichiers photos) directement à Formspree. Assurez-vous que :
- L'endpoint Formspree est activé
- Les notifications email sont configurées
- Le plan Formspree supporte les uploads de fichiers

## 🎨 Design

Le design s'inspire des meilleures pratiques des landing pages de conversion :

- **Couleurs principales**
  - Bleu foncé (#1e3a5f) - Confiance et professionnalisme
  - Rouge/Orange (#e74c3c) - CTA pour conversions
  - Blanc/Gris clair - Espaces et lisibilité

- **Typographie**
  - Système de fonts natifs pour des performances optimales
  - Hiérarchie claire des titres

- **Responsive**
  - Mobile-first approach
  - Breakpoints à 768px et 480px
  - Grilles adaptatives

## 🚀 Fonctionnalités JavaScript

- **FAQ Accordéon** - Toggle smooth avec fermeture automatique des autres items
- **Scroll fluide** - Navigation douce vers le formulaire
- **Validation formulaire** - Vérification des 2 photos minimum avant soumission
- **Upload de fichiers** - Drag & drop + feedback visuel
- **Animations au scroll** - Apparition progressive des éléments
- **Validation en temps réel** - Feedback visuel sur les champs requis

## 📦 Fichiers

```
LP0/
├── index.html       # Structure HTML complète
├── styles.css       # Styles CSS responsives
├── script.js        # Interactions JavaScript
└── README.md        # Cette documentation
```

## 🌐 Utilisation

### Localement

1. Ouvrir `index.html` directement dans un navigateur
2. Toutes les dépendances sont inline (pas de CDN externe)

### Déploiement

Déployez sur n'importe quelle plateforme d'hébergement statique :

- **Netlify** - Glisser-déposer le dossier LP0
- **Vercel** - Import depuis Git ou upload
- **GitHub Pages** - Push vers un repo GitHub
- **AWS S3** - Upload vers un bucket S3
- **Serveur web traditionnel** - FTP les 3 fichiers

### Configuration Formspree

1. Connectez-vous à [Formspree.io](https://formspree.io)
2. Vérifiez que l'endpoint `xeezdzlj` est actif
3. Configurez les notifications email
4. Testez une soumission pour valider

## ✅ Checklist avant mise en ligne

- [ ] Tester tous les liens du formulaire
- [ ] Vérifier que Formspree reçoit bien les emails
- [ ] Tester le formulaire sur mobile
- [ ] Valider l'upload de photos (min 2)
- [ ] Vérifier le responsive sur différents devices
- [ ] Tester la FAQ (tous les items s'ouvrent/ferment)
- [ ] Valider les performances (PageSpeed Insights)
- [ ] Ajouter Google Analytics (si besoin)
- [ ] Configurer le tracking de conversions
- [ ] Mettre à jour les infos de contact dans le footer

## 🔧 Personnalisation

### Changer les couleurs

Modifier les variables CSS dans `styles.css` :

```css
:root {
    --primary-color: #1e3a5f;      /* Bleu principal */
    --accent-color: #e74c3c;        /* Rouge CTA */
    --text-dark: #2c3e50;           /* Texte foncé */
    /* ... */
}
```

### Changer les images

Remplacer les URLs Unsplash dans `index.html` par vos propres images :

```html
<!-- Hero background -->
background-image: url('votre-image-hero.jpg');

<!-- Galerie avant/après -->
<img src="votre-image-avant.jpg" alt="Avant rénovation">
<img src="votre-image-apres.jpg" alt="Après rénovation">
```

### Modifier le contenu

Tout le contenu est en français et facilement modifiable dans `index.html` :
- Titres et sous-titres
- Témoignages clients
- Questions FAQ
- Informations de contact

## 📱 Compatibilité

- ✅ Chrome / Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (iOS 12+, macOS)
- ✅ Mobile (iOS, Android)

## 🎯 Taux de Conversion

Cette landing page est optimisée pour la conversion avec :

- Call-to-action clair et visible
- Preuves sociales (stats, témoignages)
- Galerie avant/après pour illustrer la valeur
- FAQ pour lever les objections
- Formulaire de qualification détaillé
- Design professionnel et rassurant
- Mobile-responsive pour capturer tous les leads

## 📞 Support

Pour toute question sur l'intégration ou la personnalisation de cette landing page, consultez la documentation de :

- [Formspree](https://help.formspree.io/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Version :** 1.0
**Date :** Février 2026
**Langue :** Français (France)