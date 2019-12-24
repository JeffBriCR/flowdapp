#include <kanbankanban.hpp>

ACTION kanbankanban::createcard(uint64_t card_id, name account, std::string title, std::string detail, asset reward ) {
  require_auth(account);

  cardstable cards( _self, _self.value );

  cards.emplace(_self, [&]( auto& card ) {
    card.id = cards.available_primary_key();
    card.card_id = card_id;
    card.reward = reward;
    card.column = ideas;
    // row.created_at = now();
    // row.updated_at = now();
  });
}

ACTION kanbankanban::movecard( uint64_t card_id, name account, uint64_t column){
  require_auth(account);

  cardstable cards( _self, _self.value );

  auto by_card_id_index = cards.get_index<"cardid"_n>();
  auto card_itr = by_card_id_index.find(card_id);

  eosio::check(card_itr != by_card_id_index.end(), "Card not found");

  by_card_id_index.modify( card_itr, _self, [&]( auto& card ) {
    card.column = column;
  });
}


ACTION kanbankanban::deletecard( uint64_t card_id ){
  require_auth(_self);

   cardstable cards( _self, _self.value );

  auto by_card_id_index = cards.get_index<"cardid"_n>();
  auto card_itr = by_card_id_index.find(card_id);

  eosio::check(card_itr != by_card_id_index.end(), "Card not found");

  by_card_id_index.erase(card_itr);
}

ACTION kanbankanban::erase() {
  //only contract owner can erase table
  require_auth(_self);
  cardstable cards( _self, _self.value );
  auto itr = cards.begin();
  while ( itr != cards.end()) {
    itr = cards.erase(itr);
  }
}
