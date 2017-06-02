<template>
    <div>
        <h1> Option Page </h1>
        <div class="add-rule">
            <el-input  v-bind:style="{width: '200px'}" name="domain" placeholder="Please Insert the domain" v-model="newRule.domain" ></el-input>
            <el-select v-model="newRule.resourceType" placeholder="Resource Type">
                <el-option v-for="item in resourceTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-tooltip class="item" effect="dark" content="Please insert an anonymous function. That function receives a url and returns a string. (url) => url.replace('www', 'aaa')" placement="top">
                <el-input v-bind:style="{width: '400px'}" placeholder="Coerce With" v-model="newRule.coerceWith"></el-input>
            </el-tooltip>
            <el-button v-on:click="addRule" >Add new rule</el-button>
        </div>

        <el-table  v-if="rules.length" :data="rules">
            <el-table-column
                    prop="active"
                    label="Active"
                    width="180">
                <template scope="scope">
                    <el-switch
                            v-model="scope.row.active"
                            on-color="#13ce66"
                            off-color="#ff4949">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column
                    prop="domain"
                    label="Domain"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="resourceType"
                    label="Resource Type"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="coerceWith"
                    label="Coerce With">
            </el-table-column>
            <el-table-column
                    label="Actions"
                    width="300">
                <template scope="scope">
                    <el-button v-on:click="deleteRule(scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    const { Rule } = require('../models/Rule');

    module.exports = {
        data: function () {
            return {
                newRule: {
                    active: true,
                    domain: '',
                    resourceType: '',
                    coerceWith: '',
                    error: ''
                },
                resourceTypes: [
                    {
                        value: 'stylesheet',
                        label: 'Stylesheet'
                    },
                    {
                        value: 'xmlhttprequest',
                        label: 'Ajax'
                    },
                    {
                        value: 'media',
                        label: 'Media'
                    },
                    {
                        value: 'script',
                        label: 'Script Tags'
                    },
                    {
                        value: 'font',
                        label: 'Fonts'
                    }
                ],
                ruleView: false,
                rules: this.fetchRules()
            }
        },
        methods: {
            addRule: function() {
                const rule = new Rule(this.newRule);

                if(!rule.isValid()) {
                    console.warn('Rule is not valid', rule);
                    return;
                }

                this.rules.push(rule);
                this.resetAddRuleFields();
            },
            resetAddRuleFields : function() {
                this.$set(this.newRule, 'domain', '');
                this.$set(this.newRule, 'coerceWith', '');
                this.$set(this.newRule, 'resourceType', '');
            },
            fetchRules: () => {
                const rules = localStorage.getItem('rules');
                if (!rules) { return [] }

                return JSON.parse(rules).map((rule) => new Rule(rule));
            },
            deleteRule: function (rule) {
                this.rules = this.rules.filter((r) => r.id !== rule.id)
            }
        },
        watch: {
            rules:  {
                handler: function (rules) {
                    localStorage.setItem('rules', JSON.stringify(rules))
                },
                deep: true
            },
        }
    }
</script>

<style scoped>
    .add-rule {
        padding-bottom: 20px;
    }
</style>