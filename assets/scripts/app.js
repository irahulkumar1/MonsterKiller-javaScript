const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const dealPlayerDamage = dealMonsterDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= PlayerDamage;
  if (currentMonsterHealth <= 0) {
    alert("You Won !");
  } else if (currentPlayerHealth <= 0) {
    alert("you lost!");
  }
}
attackBtn.addEventListener("click", attackHandler);
