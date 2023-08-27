DROP TABLE IF EXISTS chronofit.trainings;

BEGIN;

CREATE TABLE chronofit.trainings (
  id SERIAL PRIMARY KEY,
  user_id int(11) NOT NULL,
  name varchar(50) NOT NULL,
  type varchar(50) DEFAULT NULL,
  duration int(11) NOT NULL,
  timecap int(11) NOT NULL,
  exos json NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO chronofit.trainings (user_id, name, type, duration, timecap, exos)
VALUES
(5, 'create sql 0', 'EMOM', 6, 0,
  '[
    {
      "name": "exo 1",
      "description": "desc de l''exo 1",
      "duration": 1.9,
      "reps": 2,
      "weight": 2
    },
    {
      "name": "exo 2",
      "description": "desc de l''exo 2",
      "duration": 1.9,
      "reps": 3,
      "weight": 0
    },
    {
      "name": "exo 2",
      "description": "desc de l''exo 3",
      "duration": 1.9,
      "reps": 3,
      "weight": 0
    }
  ]'
),
(5, 'create_sql_1', 'FORTIME', 6, 0,
  '[
    {
      "name": "exo 11",
      "description": "desc de l''exo 11",
      "duration": 1.9,
      "reps": 2,
      "weight": 2
    },
    {
      "name": "exo 21",
      "description": "desc de l''exo 21",
      "duration": 1.9,
      "reps": 3,
      "weight": 0
    },
    {
      "name": "exo 21",
      "description": "desc de l''exo 31",
      "duration": 1.9,
      "reps": 3,
      "weight": 0
    }
  ]'
);
COMMIT;