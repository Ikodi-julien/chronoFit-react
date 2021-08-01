export const currentTraining = {
  id: 4,
  name: 'excepturi',
  isBenchmark: false,
  createdAt: '2021-07-21T20:01:27.556Z',
  updatedAt: '2021-07-21T20:01:27.598Z',
  categoryId: 2,
  userId: 1,
  category: {
    id: 2,
    name: 'FORCE',
    createdAt: '2021-07-21T20:01:27.395Z',
    updatedAt: '2021-07-21T20:01:27.395Z'
  },
  creator: {
    id: 1,
    pseudo: 'Christophe.Thomas',
    firstname: 'Alverède',
    lastname: 'Baron',
    password: '$2b$04$vDpoZeDPzvcQwJaSifna0OCLM.QRx4ApqsKi24s1.qgKS/2hvblBa',
    email: 'Flavie36@yahoo.fr',
    createdAt: '2021-07-21T20:01:27.482Z',
    updatedAt: '2021-07-21T20:01:27.518Z',
    roleId: 3
  },
  rounds: [
    {
      id: '4',
      iteration: '2',
      duration: '298',
      createdAt: '2021-07-21T20:01:27.794Z',
      updatedAt: '2021-07-21T20:01:27.814Z',
      trainingId: '4',
      exercices: [
        {
          id: '8',
          name: 'Body Blaster',
          description: 'Complex  gym (enchainement) de trois exercices au poids de corps :  push-up  +  pull-up  +  toes-to-bar . Le pull-up et le toes-to-bar peuvent être exécutés strict (sans élan) ou avec un kipping ( élan). Le toes-to-bar peut être remplacé par un  knees-to-elbow',
          isBenchmark: false,
          createdAt: '2021-07-21T20:01:27.438Z',
          updatedAt: '2021-07-21T20:01:27.438Z',
          round_has_exercices: {
            createdAt: '2021-07-21T20:01:27.812Z',
            updatedAt: '2021-07-21T20:01:27.812Z',
            roundId: '4',
            exerciceId: '8'
          },
          options: [
            {
              id: '18',
              duration: '10',
              weight: '25',
              reps: '10',
              createdAt: '2021-07-21T20:01:28.088Z',
              updatedAt: '2021-07-21T20:01:28.091Z',
              exerciceId: '8',
              trainingId: '4'
            }
          ]
        },
        {
          id: 13,
          name: 'Burpee',
          description: 'Le  burpee  est un  complex  combinant, pour la version classique niveau débutant, une flexion des jambes, un appui pieds-mains en planche corps gainé, une pompe, un retour corps groupé en flexion des jambes et un saut. La version pour pratiquant débrouillé consiste à:\r\n tomber au sol en fléchissant le buste rebondir au sol avec la poitrine sauter pour monter en pointant les fesses aussi haut que possible',
          isBenchmark: false,
          createdAt: '2021-07-21T20:01:27.452Z',
          updatedAt: '2021-07-21T20:01:27.452Z',
          round_has_exercices: {
            createdAt: '2021-07-21T20:01:27.808Z',
            updatedAt: '2021-07-21T20:01:27.808Z',
            roundId: 4,
            exerciceId: 13
          },
          options: [
            {
              id: 17,
              duration: 47,
              weight: 55,
              reps: 10,
              createdAt: '2021-07-21T20:01:28.083Z',
              updatedAt: '2021-07-21T20:01:28.085Z',
              exerciceId: 13,
              trainingId: 4
            }
          ]
        },
        {
          id: 18,
          name: 'Calorie Row',
          description: 'nombre de calories à brûler au rameur.',
          isBenchmark: false,
          createdAt: '2021-07-21T20:01:27.468Z',
          updatedAt: '2021-07-21T20:01:27.468Z',
          round_has_exercices: {
            createdAt: '2021-07-21T20:01:27.805Z',
            updatedAt: '2021-07-21T20:01:27.805Z',
            roundId: 4,
            exerciceId: 18
          },
          options: [
            {
              id: 16,
              duration: 19,
              weight: 65,
              reps: 10,
              createdAt: '2021-07-21T20:01:28.078Z',
              updatedAt: '2021-07-21T20:01:28.080Z',
              exerciceId: 18,
              trainingId: 4
            }
          ]
        },
        {
          id: 2,
          name: 'Air Squat',
          description: 'L\'air squat est un  squat  au poids de corps. C\'est le premier des 9 mouvements de base du crossfit. Pour être pleinement efficace il doit être exécuté en suivant ces consignes : flexion complète et simultanée des jambes, pieds bien à plat et écartés de la largeur des épaules, orteils pointés légèrement vers l\'extérieur, talons non décollés, bas du dos non arrondi, tête droite et regard horizontal. En cliquant sur l\'image vous découvrirez les muscles sollicités durant le squat et des programmes de renforcement incluant cet exercice fondamental.',
          isBenchmark: false,
          createdAt: '2021-07-21T20:01:27.419Z',
          updatedAt: '2021-07-21T20:01:27.419Z',
          round_has_exercices: {
            createdAt: '2021-07-21T20:01:27.798Z',
            updatedAt: '2021-07-21T20:01:27.798Z',
            roundId: 4,
            exerciceId: 2
          },
          options: [
            {
              id: 15,
              duration: 39,
              weight: 90,
              reps: 10,
              createdAt: '2021-07-21T20:01:28.073Z',
              updatedAt: '2021-07-21T20:01:28.075Z',
              exerciceId: 2,
              trainingId: 4
            }
          ]
        }
      ]
    },
    {
      id: 3,
      iteration: 2,
      duration: 316,
      createdAt: '2021-07-21T20:01:27.775Z',
      updatedAt: '2021-07-21T20:01:27.793Z',
      trainingId: 4,
      exercices: [
        {
          id: 15,
          name: 'Buy in',
          description: ' Tache à effectuer avant de passer à l\'entrainement principal. Peut également être appelé un cash-in',
          isBenchmark: false,
          createdAt: '2021-07-21T20:01:27.458Z',
          updatedAt: '2021-07-21T20:01:27.458Z',
          round_has_exercices: {
            createdAt: '2021-07-21T20:01:27.791Z',
            updatedAt: '2021-07-21T20:01:27.791Z',
            roundId: 3,
            exerciceId: 15
          },
          options: [
            {
              id: 14,
              duration: 27,
              weight: 15,
              reps: 5,
              createdAt: '2021-07-21T20:01:28.068Z',
              updatedAt: '2021-07-21T20:01:28.070Z',
              exerciceId: 15,
              trainingId: 4
            }
          ]
        },
        {
          id: 19,
          name: 'Chest to Bar abrévié C2B',
          description: 'Le chest to bar est un  pull-up  avec contact de la barre avec la poitrine sous les clavicules. ',
          isBenchmark: false,
          createdAt: '2021-07-21T20:01:27.471Z',
          updatedAt: '2021-07-21T20:01:27.471Z',
          round_has_exercices: {
            createdAt: '2021-07-21T20:01:27.786Z',
            updatedAt: '2021-07-21T20:01:27.786Z',
            roundId: 3,
            exerciceId: 19
          },
          options: [
            {
              id: 13,
              duration: 85,
              weight: 65,
              reps: 10,
              createdAt: '2021-07-21T20:01:28.063Z',
              updatedAt: '2021-07-21T20:01:28.065Z',
              exerciceId: 19,
              trainingId: 4
            }
          ]
        },
        {
          id: 14,
          name: 'Burpee-Pull up',
          description: ' Une combinaison d\'un burpee et d\'une traction-barre (pull up) durant le saut. Une variante du burpee-pull up est le burpee target où il faut seulement toucher une cible au mur ou une barre au point haut du saut. Une variante plus complexe est le burpee-muscle up qui impose l\'exécution d\'un muscle up à la barre après le saut vertical.',
          isBenchmark: false,
          createdAt: '2021-07-21T20:01:27.455Z',
          updatedAt: '2021-07-21T20:01:27.455Z',
          round_has_exercices: {
            createdAt: '2021-07-21T20:01:27.783Z',
            updatedAt: '2021-07-21T20:01:27.783Z',
            roundId: 3,
            exerciceId: 14
          },
          options: [
            {
              id: 12,
              duration: 70,
              weight: 20,
              reps: 5,
              createdAt: '2021-07-21T20:01:28.058Z',
              updatedAt: '2021-07-21T20:01:28.060Z',
              exerciceId: 14,
              trainingId: 4
            }
          ]
        },
        {
          id: 1,
          name: '1RM',
          description: 'Mot à mot  1RM  signifie Une Répétition Maximale et désigne la  charge maximale  déplacée sur une seule répétition. Après le  warm up  la  1RM  est souvent réalisée ou approchée ( 2RM  ou  3RM ) dans la partie Renforcement de la séance afin d\'effectuer le  Metcon  qui suit à la bonne intensité au niveau des charges déplacées si on a décidé de le  scaler . Elle peut être estimée avec la formule mathématique suivante: ((0,0333 X nombre maximal de répétitions) + 1) X charge déplacée',
          isBenchmark: false,
          createdAt: '2021-07-21T20:01:27.411Z',
          updatedAt: '2021-07-21T20:01:27.411Z',
          round_has_exercices: {
            createdAt: '2021-07-21T20:01:27.779Z',
            updatedAt: '2021-07-21T20:01:27.779Z',
            roundId: 3,
            exerciceId: 1
          },
          options: [
            {
              id: 11,
              duration: 94,
              weight: 75,
              reps: 5,
              createdAt: '2021-07-21T20:01:28.054Z',
              updatedAt: '2021-07-21T20:01:28.056Z',
              exerciceId: 1,
              trainingId: 4
            }
          ]
        }
      ]
    }
  ],
  trainingsDoneChild: [
    {
      id: 1,
      duration: 1280,
      createdAt: '2021-07-21T20:01:27.612Z',
      updatedAt: '2021-07-21T20:01:27.650Z',
      trainingId: 4,
      userId: 5,
      results: [
        {
          id: 1,
          duration: 121,
          weight: 8,
          reps: 19,
          createdAt: '2021-07-21T20:01:28.265Z',
          updatedAt: '2021-07-21T20:01:28.279Z',
          exerciceId: 1,
          userId: 5,
          trainingDoneId: 1,
          exercice: {
            id: 1,
            name: '1RM',
            description: 'Mot à mot  1RM  signifie Une Répétition Maximale et désigne la  charge maximale  déplacée sur une seule répétition. Après le  warm up  la  1RM  est souvent réalisée ou approchée ( 2RM  ou  3RM ) dans la partie Renforcement de la séance afin d\'effectuer le  Metcon  qui suit à la bonne intensité au niveau des charges déplacées si on a décidé de le  scaler . Elle peut être estimée avec la formule mathématique suivante: ((0,0333 X nombre maximal de répétitions) + 1) X charge déplacée',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.411Z',
            updatedAt: '2021-07-21T20:01:27.411Z'
          }
        },
        {
          id: 2,
          duration: 100,
          weight: 18,
          reps: 19,
          createdAt: '2021-07-21T20:01:28.282Z',
          updatedAt: '2021-07-21T20:01:28.293Z',
          exerciceId: 14,
          userId: 5,
          trainingDoneId: 1,
          exercice: {
            id: 14,
            name: 'Burpee-Pull up',
            description: ' Une combinaison d\'un burpee et d\'une traction-barre (pull up) durant le saut. Une variante du burpee-pull up est le burpee target où il faut seulement toucher une cible au mur ou une barre au point haut du saut. Une variante plus complexe est le burpee-muscle up qui impose l\'exécution d\'un muscle up à la barre après le saut vertical.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.455Z',
            updatedAt: '2021-07-21T20:01:27.455Z'
          }
        },
        {
          id: 3,
          duration: 29,
          weight: 12,
          reps: 11,
          createdAt: '2021-07-21T20:01:28.296Z',
          updatedAt: '2021-07-21T20:01:28.308Z',
          exerciceId: 19,
          userId: 5,
          trainingDoneId: 1,
          exercice: {
            id: 19,
            name: 'Chest to Bar abrévié C2B',
            description: 'Le chest to bar est un  pull-up  avec contact de la barre avec la poitrine sous les clavicules. ',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.471Z',
            updatedAt: '2021-07-21T20:01:27.471Z'
          }
        },
        {
          id: 4,
          duration: 149,
          weight: 17,
          reps: 5,
          createdAt: '2021-07-21T20:01:28.311Z',
          updatedAt: '2021-07-21T20:01:28.320Z',
          exerciceId: 15,
          userId: 5,
          trainingDoneId: 1,
          exercice: {
            id: 15,
            name: 'Buy in',
            description: ' Tache à effectuer avant de passer à l\'entrainement principal. Peut également être appelé un cash-in',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.458Z',
            updatedAt: '2021-07-21T20:01:27.458Z'
          }
        },
        {
          id: 5,
          duration: 92,
          weight: 0,
          reps: 4,
          createdAt: '2021-07-21T20:01:28.322Z',
          updatedAt: '2021-07-21T20:01:28.332Z',
          exerciceId: 2,
          userId: 5,
          trainingDoneId: 1,
          exercice: {
            id: 2,
            name: 'Air Squat',
            description: 'L\'air squat est un  squat  au poids de corps. C\'est le premier des 9 mouvements de base du crossfit. Pour être pleinement efficace il doit être exécuté en suivant ces consignes : flexion complète et simultanée des jambes, pieds bien à plat et écartés de la largeur des épaules, orteils pointés légèrement vers l\'extérieur, talons non décollés, bas du dos non arrondi, tête droite et regard horizontal. En cliquant sur l\'image vous découvrirez les muscles sollicités durant le squat et des programmes de renforcement incluant cet exercice fondamental.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.419Z',
            updatedAt: '2021-07-21T20:01:27.419Z'
          }
        },
        {
          id: 6,
          duration: 171,
          weight: 10,
          reps: 1,
          createdAt: '2021-07-21T20:01:28.334Z',
          updatedAt: '2021-07-21T20:01:28.344Z',
          exerciceId: 18,
          userId: 5,
          trainingDoneId: 1,
          exercice: {
            id: 18,
            name: 'Calorie Row',
            description: 'nombre de calories à brûler au rameur.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.468Z',
            updatedAt: '2021-07-21T20:01:27.468Z'
          }
        },
        {
          id: 7,
          duration: 171,
          weight: 6,
          reps: 14,
          createdAt: '2021-07-21T20:01:28.346Z',
          updatedAt: '2021-07-21T20:01:28.357Z',
          exerciceId: 13,
          userId: 5,
          trainingDoneId: 1,
          exercice: {
            id: 13,
            name: 'Burpee',
            description: 'Le  burpee  est un  complex  combinant, pour la version classique niveau débutant, une flexion des jambes, un appui pieds-mains en planche corps gainé, une pompe, un retour corps groupé en flexion des jambes et un saut. La version pour pratiquant débrouillé consiste à:\r\n tomber au sol en fléchissant le buste rebondir au sol avec la poitrine sauter pour monter en pointant les fesses aussi haut que possible',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.452Z',
            updatedAt: '2021-07-21T20:01:27.452Z'
          }
        },
        {
          id: 8,
          duration: 192,
          weight: 12,
          reps: 0,
          createdAt: '2021-07-21T20:01:28.359Z',
          updatedAt: '2021-07-21T20:01:28.368Z',
          exerciceId: 8,
          userId: 5,
          trainingDoneId: 1,
          exercice: {
            id: 8,
            name: 'Body Blaster',
            description: 'Complex  gym (enchainement) de trois exercices au poids de corps :  push-up  +  pull-up  +  toes-to-bar . Le pull-up et le toes-to-bar peuvent être exécutés strict (sans élan) ou avec un kipping ( élan). Le toes-to-bar peut être remplacé par un  knees-to-elbow',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.438Z',
            updatedAt: '2021-07-21T20:01:27.438Z'
          }
        }
      ]
    },
    {
      id: 3,
      duration: 580,
      createdAt: '2021-07-21T20:01:27.620Z',
      updatedAt: '2021-07-21T20:01:27.667Z',
      trainingId: 4,
      userId: 5,
      results: [
        {
          id: 26,
          duration: 140,
          weight: 5,
          reps: 16,
          createdAt: '2021-07-21T20:01:28.586Z',
          updatedAt: '2021-07-21T20:01:28.595Z',
          exerciceId: 8,
          userId: 5,
          trainingDoneId: 3,
          exercice: {
            id: 8,
            name: 'Body Blaster',
            description: 'Complex  gym (enchainement) de trois exercices au poids de corps :  push-up  +  pull-up  +  toes-to-bar . Le pull-up et le toes-to-bar peuvent être exécutés strict (sans élan) ou avec un kipping ( élan). Le toes-to-bar peut être remplacé par un  knees-to-elbow',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.438Z',
            updatedAt: '2021-07-21T20:01:27.438Z'
          }
        },
        {
          id: 19,
          duration: 59,
          weight: 13,
          reps: 8,
          createdAt: '2021-07-21T20:01:28.504Z',
          updatedAt: '2021-07-21T20:01:28.513Z',
          exerciceId: 1,
          userId: 5,
          trainingDoneId: 3,
          exercice: {
            id: 1,
            name: '1RM',
            description: 'Mot à mot  1RM  signifie Une Répétition Maximale et désigne la  charge maximale  déplacée sur une seule répétition. Après le  warm up  la  1RM  est souvent réalisée ou approchée ( 2RM  ou  3RM ) dans la partie Renforcement de la séance afin d\'effectuer le  Metcon  qui suit à la bonne intensité au niveau des charges déplacées si on a décidé de le  scaler . Elle peut être estimée avec la formule mathématique suivante: ((0,0333 X nombre maximal de répétitions) + 1) X charge déplacée',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.411Z',
            updatedAt: '2021-07-21T20:01:27.411Z'
          }
        },
        {
          id: 20,
          duration: 108,
          weight: 7,
          reps: 5,
          createdAt: '2021-07-21T20:01:28.516Z',
          updatedAt: '2021-07-21T20:01:28.525Z',
          exerciceId: 14,
          userId: 5,
          trainingDoneId: 3,
          exercice: {
            id: 14,
            name: 'Burpee-Pull up',
            description: ' Une combinaison d\'un burpee et d\'une traction-barre (pull up) durant le saut. Une variante du burpee-pull up est le burpee target où il faut seulement toucher une cible au mur ou une barre au point haut du saut. Une variante plus complexe est le burpee-muscle up qui impose l\'exécution d\'un muscle up à la barre après le saut vertical.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.455Z',
            updatedAt: '2021-07-21T20:01:27.455Z'
          }
        },
        {
          id: 21,
          duration: 45,
          weight: 17,
          reps: 2,
          createdAt: '2021-07-21T20:01:28.527Z',
          updatedAt: '2021-07-21T20:01:28.536Z',
          exerciceId: 19,
          userId: 5,
          trainingDoneId: 3,
          exercice: {
            id: 19,
            name: 'Chest to Bar abrévié C2B',
            description: 'Le chest to bar est un  pull-up  avec contact de la barre avec la poitrine sous les clavicules. ',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.471Z',
            updatedAt: '2021-07-21T20:01:27.471Z'
          }
        },
        {
          id: 22,
          duration: 170,
          weight: 3,
          reps: 8,
          createdAt: '2021-07-21T20:01:28.539Z',
          updatedAt: '2021-07-21T20:01:28.546Z',
          exerciceId: 15,
          userId: 5,
          trainingDoneId: 3,
          exercice: {
            id: 15,
            name: 'Buy in',
            description: ' Tache à effectuer avant de passer à l\'entrainement principal. Peut également être appelé un cash-in',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.458Z',
            updatedAt: '2021-07-21T20:01:27.458Z'
          }
        },
        {
          id: 23,
          duration: 187,
          weight: 19,
          reps: 8,
          createdAt: '2021-07-21T20:01:28.549Z',
          updatedAt: '2021-07-21T20:01:28.557Z',
          exerciceId: 2,
          userId: 5,
          trainingDoneId: 3,
          exercice: {
            id: 2,
            name: 'Air Squat',
            description: 'L\'air squat est un  squat  au poids de corps. C\'est le premier des 9 mouvements de base du crossfit. Pour être pleinement efficace il doit être exécuté en suivant ces consignes : flexion complète et simultanée des jambes, pieds bien à plat et écartés de la largeur des épaules, orteils pointés légèrement vers l\'extérieur, talons non décollés, bas du dos non arrondi, tête droite et regard horizontal. En cliquant sur l\'image vous découvrirez les muscles sollicités durant le squat et des programmes de renforcement incluant cet exercice fondamental.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.419Z',
            updatedAt: '2021-07-21T20:01:27.419Z'
          }
        },
        {
          id: 24,
          duration: 116,
          weight: 10,
          reps: 19,
          createdAt: '2021-07-21T20:01:28.560Z',
          updatedAt: '2021-07-21T20:01:28.571Z',
          exerciceId: 18,
          userId: 5,
          trainingDoneId: 3,
          exercice: {
            id: 18,
            name: 'Calorie Row',
            description: 'nombre de calories à brûler au rameur.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.468Z',
            updatedAt: '2021-07-21T20:01:27.468Z'
          }
        },
        {
          id: 25,
          duration: 169,
          weight: 8,
          reps: 6,
          createdAt: '2021-07-21T20:01:28.574Z',
          updatedAt: '2021-07-21T20:01:28.583Z',
          exerciceId: 13,
          userId: 5,
          trainingDoneId: 3,
          exercice: {
            id: 13,
            name: 'Burpee',
            description: 'Le  burpee  est un  complex  combinant, pour la version classique niveau débutant, une flexion des jambes, un appui pieds-mains en planche corps gainé, une pompe, un retour corps groupé en flexion des jambes et un saut. La version pour pratiquant débrouillé consiste à:\r\n tomber au sol en fléchissant le buste rebondir au sol avec la poitrine sauter pour monter en pointant les fesses aussi haut que possible',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.452Z',
            updatedAt: '2021-07-21T20:01:27.452Z'
          }
        }
      ]
    },
    {
      id: 4,
      duration: 1377,
      createdAt: '2021-07-21T20:01:27.622Z',
      updatedAt: '2021-07-21T20:01:27.675Z',
      trainingId: 4,
      userId: 1,
      results: [
        {
          id: 27,
          duration: 119,
          weight: 14,
          reps: 6,
          createdAt: '2021-07-21T20:01:28.601Z',
          updatedAt: '2021-07-21T20:01:28.609Z',
          exerciceId: 1,
          userId: 1,
          trainingDoneId: 4,
          exercice: {
            id: 1,
            name: '1RM',
            description: 'Mot à mot  1RM  signifie Une Répétition Maximale et désigne la  charge maximale  déplacée sur une seule répétition. Après le  warm up  la  1RM  est souvent réalisée ou approchée ( 2RM  ou  3RM ) dans la partie Renforcement de la séance afin d\'effectuer le  Metcon  qui suit à la bonne intensité au niveau des charges déplacées si on a décidé de le  scaler . Elle peut être estimée avec la formule mathématique suivante: ((0,0333 X nombre maximal de répétitions) + 1) X charge déplacée',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.411Z',
            updatedAt: '2021-07-21T20:01:27.411Z'
          }
        },
        {
          id: 28,
          duration: 46,
          weight: 3,
          reps: 19,
          createdAt: '2021-07-21T20:01:28.612Z',
          updatedAt: '2021-07-21T20:01:28.622Z',
          exerciceId: 14,
          userId: 1,
          trainingDoneId: 4,
          exercice: {
            id: 14,
            name: 'Burpee-Pull up',
            description: ' Une combinaison d\'un burpee et d\'une traction-barre (pull up) durant le saut. Une variante du burpee-pull up est le burpee target où il faut seulement toucher une cible au mur ou une barre au point haut du saut. Une variante plus complexe est le burpee-muscle up qui impose l\'exécution d\'un muscle up à la barre après le saut vertical.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.455Z',
            updatedAt: '2021-07-21T20:01:27.455Z'
          }
        },
        {
          id: 29,
          duration: 185,
          weight: 11,
          reps: 11,
          createdAt: '2021-07-21T20:01:28.624Z',
          updatedAt: '2021-07-21T20:01:28.634Z',
          exerciceId: 19,
          userId: 1,
          trainingDoneId: 4,
          exercice: {
            id: 19,
            name: 'Chest to Bar abrévié C2B',
            description: 'Le chest to bar est un  pull-up  avec contact de la barre avec la poitrine sous les clavicules. ',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.471Z',
            updatedAt: '2021-07-21T20:01:27.471Z'
          }
        },
        {
          id: 30,
          duration: 83,
          weight: 19,
          reps: 9,
          createdAt: '2021-07-21T20:01:28.637Z',
          updatedAt: '2021-07-21T20:01:28.645Z',
          exerciceId: 15,
          userId: 1,
          trainingDoneId: 4,
          exercice: {
            id: 15,
            name: 'Buy in',
            description: ' Tache à effectuer avant de passer à l\'entrainement principal. Peut également être appelé un cash-in',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.458Z',
            updatedAt: '2021-07-21T20:01:27.458Z'
          }
        },
        {
          id: 31,
          duration: 140,
          weight: 10,
          reps: 15,
          createdAt: '2021-07-21T20:01:28.647Z',
          updatedAt: '2021-07-21T20:01:28.657Z',
          exerciceId: 2,
          userId: 1,
          trainingDoneId: 4,
          exercice: {
            id: 2,
            name: 'Air Squat',
            description: 'L\'air squat est un  squat  au poids de corps. C\'est le premier des 9 mouvements de base du crossfit. Pour être pleinement efficace il doit être exécuté en suivant ces consignes : flexion complète et simultanée des jambes, pieds bien à plat et écartés de la largeur des épaules, orteils pointés légèrement vers l\'extérieur, talons non décollés, bas du dos non arrondi, tête droite et regard horizontal. En cliquant sur l\'image vous découvrirez les muscles sollicités durant le squat et des programmes de renforcement incluant cet exercice fondamental.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.419Z',
            updatedAt: '2021-07-21T20:01:27.419Z'
          }
        },
        {
          id: 32,
          duration: 140,
          weight: 7,
          reps: 1,
          createdAt: '2021-07-21T20:01:28.659Z',
          updatedAt: '2021-07-21T20:01:28.667Z',
          exerciceId: 18,
          userId: 1,
          trainingDoneId: 4,
          exercice: {
            id: 18,
            name: 'Calorie Row',
            description: 'nombre de calories à brûler au rameur.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.468Z',
            updatedAt: '2021-07-21T20:01:27.468Z'
          }
        },
        {
          id: 33,
          duration: 34,
          weight: 9,
          reps: 10,
          createdAt: '2021-07-21T20:01:28.670Z',
          updatedAt: '2021-07-21T20:01:28.678Z',
          exerciceId: 13,
          userId: 1,
          trainingDoneId: 4,
          exercice: {
            id: 13,
            name: 'Burpee',
            description: 'Le  burpee  est un  complex  combinant, pour la version classique niveau débutant, une flexion des jambes, un appui pieds-mains en planche corps gainé, une pompe, un retour corps groupé en flexion des jambes et un saut. La version pour pratiquant débrouillé consiste à:\r\n tomber au sol en fléchissant le buste rebondir au sol avec la poitrine sauter pour monter en pointant les fesses aussi haut que possible',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.452Z',
            updatedAt: '2021-07-21T20:01:27.452Z'
          }
        },
        {
          id: 34,
          duration: 43,
          weight: 3,
          reps: 0,
          createdAt: '2021-07-21T20:01:28.681Z',
          updatedAt: '2021-07-21T20:01:28.689Z',
          exerciceId: 8,
          userId: 1,
          trainingDoneId: 4,
          exercice: {
            id: 8,
            name: 'Body Blaster',
            description: 'Complex  gym (enchainement) de trois exercices au poids de corps :  push-up  +  pull-up  +  toes-to-bar . Le pull-up et le toes-to-bar peuvent être exécutés strict (sans élan) ou avec un kipping ( élan). Le toes-to-bar peut être remplacé par un  knees-to-elbow',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.438Z',
            updatedAt: '2021-07-21T20:01:27.438Z'
          }
        }
      ]
    },
    {
      id: 5,
      duration: 1440,
      createdAt: '2021-07-21T20:01:27.626Z',
      updatedAt: '2021-07-21T20:01:27.683Z',
      trainingId: 4,
      userId: 2,
      results: [
        {
          id: 35,
          duration: 179,
          weight: 10,
          reps: 14,
          createdAt: '2021-07-21T20:01:28.695Z',
          updatedAt: '2021-07-21T20:01:28.704Z',
          exerciceId: 1,
          userId: 2,
          trainingDoneId: 5,
          exercice: {
            id: 1,
            name: '1RM',
            description: 'Mot à mot  1RM  signifie Une Répétition Maximale et désigne la  charge maximale  déplacée sur une seule répétition. Après le  warm up  la  1RM  est souvent réalisée ou approchée ( 2RM  ou  3RM ) dans la partie Renforcement de la séance afin d\'effectuer le  Metcon  qui suit à la bonne intensité au niveau des charges déplacées si on a décidé de le  scaler . Elle peut être estimée avec la formule mathématique suivante: ((0,0333 X nombre maximal de répétitions) + 1) X charge déplacée',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.411Z',
            updatedAt: '2021-07-21T20:01:27.411Z'
          }
        },
        {
          id: 36,
          duration: 102,
          weight: 5,
          reps: 13,
          createdAt: '2021-07-21T20:01:28.707Z',
          updatedAt: '2021-07-21T20:01:28.714Z',
          exerciceId: 14,
          userId: 2,
          trainingDoneId: 5,
          exercice: {
            id: 14,
            name: 'Burpee-Pull up',
            description: ' Une combinaison d\'un burpee et d\'une traction-barre (pull up) durant le saut. Une variante du burpee-pull up est le burpee target où il faut seulement toucher une cible au mur ou une barre au point haut du saut. Une variante plus complexe est le burpee-muscle up qui impose l\'exécution d\'un muscle up à la barre après le saut vertical.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.455Z',
            updatedAt: '2021-07-21T20:01:27.455Z'
          }
        },
        {
          id: 37,
          duration: 146,
          weight: 17,
          reps: 8,
          createdAt: '2021-07-21T20:01:28.717Z',
          updatedAt: '2021-07-21T20:01:28.727Z',
          exerciceId: 19,
          userId: 2,
          trainingDoneId: 5,
          exercice: {
            id: 19,
            name: 'Chest to Bar abrévié C2B',
            description: 'Le chest to bar est un  pull-up  avec contact de la barre avec la poitrine sous les clavicules. ',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.471Z',
            updatedAt: '2021-07-21T20:01:27.471Z'
          }
        },
        {
          id: 38,
          duration: 126,
          weight: 6,
          reps: 14,
          createdAt: '2021-07-21T20:01:28.729Z',
          updatedAt: '2021-07-21T20:01:28.738Z',
          exerciceId: 15,
          userId: 2,
          trainingDoneId: 5,
          exercice: {
            id: 15,
            name: 'Buy in',
            description: ' Tache à effectuer avant de passer à l\'entrainement principal. Peut également être appelé un cash-in',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.458Z',
            updatedAt: '2021-07-21T20:01:27.458Z'
          }
        },
        {
          id: 39,
          duration: 49,
          weight: 10,
          reps: 14,
          createdAt: '2021-07-21T20:01:28.741Z',
          updatedAt: '2021-07-21T20:01:28.752Z',
          exerciceId: 2,
          userId: 2,
          trainingDoneId: 5,
          exercice: {
            id: 2,
            name: 'Air Squat',
            description: 'L\'air squat est un  squat  au poids de corps. C\'est le premier des 9 mouvements de base du crossfit. Pour être pleinement efficace il doit être exécuté en suivant ces consignes : flexion complète et simultanée des jambes, pieds bien à plat et écartés de la largeur des épaules, orteils pointés légèrement vers l\'extérieur, talons non décollés, bas du dos non arrondi, tête droite et regard horizontal. En cliquant sur l\'image vous découvrirez les muscles sollicités durant le squat et des programmes de renforcement incluant cet exercice fondamental.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.419Z',
            updatedAt: '2021-07-21T20:01:27.419Z'
          }
        },
        {
          id: 40,
          duration: 14,
          weight: 18,
          reps: 9,
          createdAt: '2021-07-21T20:01:28.754Z',
          updatedAt: '2021-07-21T20:01:28.763Z',
          exerciceId: 18,
          userId: 2,
          trainingDoneId: 5,
          exercice: {
            id: 18,
            name: 'Calorie Row',
            description: 'nombre de calories à brûler au rameur.',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.468Z',
            updatedAt: '2021-07-21T20:01:27.468Z'
          }
        },
        {
          id: 41,
          duration: 153,
          weight: 7,
          reps: 11,
          createdAt: '2021-07-21T20:01:28.766Z',
          updatedAt: '2021-07-21T20:01:28.774Z',
          exerciceId: 13,
          userId: 2,
          trainingDoneId: 5,
          exercice: {
            id: 13,
            name: 'Burpee',
            description: 'Le  burpee  est un  complex  combinant, pour la version classique niveau débutant, une flexion des jambes, un appui pieds-mains en planche corps gainé, une pompe, un retour corps groupé en flexion des jambes et un saut. La version pour pratiquant débrouillé consiste à:\r\n tomber au sol en fléchissant le buste rebondir au sol avec la poitrine sauter pour monter en pointant les fesses aussi haut que possible',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.452Z',
            updatedAt: '2021-07-21T20:01:27.452Z'
          }
        },
        {
          id: 42,
          duration: 171,
          weight: 0,
          reps: 17,
          createdAt: '2021-07-21T20:01:28.778Z',
          updatedAt: '2021-07-21T20:01:28.786Z',
          exerciceId: 8,
          userId: 2,
          trainingDoneId: 5,
          exercice: {
            id: 8,
            name: 'Body Blaster',
            description: 'Complex  gym (enchainement) de trois exercices au poids de corps :  push-up  +  pull-up  +  toes-to-bar . Le pull-up et le toes-to-bar peuvent être exécutés strict (sans élan) ou avec un kipping ( élan). Le toes-to-bar peut être remplacé par un  knees-to-elbow',
            isBenchmark: false,
            createdAt: '2021-07-21T20:01:27.438Z',
            updatedAt: '2021-07-21T20:01:27.438Z'
          }
        }
      ]
    }
  ]
}