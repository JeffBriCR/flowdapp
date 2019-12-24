#include <eosio/eosio.hpp>
#include <eosio/asset.hpp>

using namespace eosio;
using namespace std;

CONTRACT kanbankanban : public contract {
   public:
      using contract::contract;

      ACTION createcard( uint64_t card_id, name account, std::string title, std::string detail, asset reward);

      ACTION movecard( uint64_t card_id, name account, uint64_t column);

      ACTION deletecard( uint64_t card_id );

      ACTION erase();

      TABLE cards_table {
        uint64_t id;
        uint64_t card_id;
        asset reward;
        uint32_t column;
        uint32_t created_at;
        uint32_t updated_at;

        uint64_t primary_key() const { return id; }
        uint64_t by_card_id() const { return card_id; }
      };

      typedef eosio::multi_index<"cards"_n, cards_table,
        indexed_by<"cardid"_n, const_mem_fun<cards_table, uint64_t, &cards_table::by_card_id>>
       > cardstable;

      enum columns {
         ideas = 0, // default
         todo = 1,
         doing = 2,
         review = 3,
         done  = 4
      };

      // using createcard_action = action_wrapper<"createcard"_n, &kanbankanban::createcard>;
};
